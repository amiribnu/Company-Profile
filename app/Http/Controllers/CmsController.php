<?php

namespace App\Http\Controllers;

use App\Http\Requests\WebSettingRequest;
use App\Models\CmsIndex;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CmsController extends Controller
{
    public function index()
    {
        $certificate = CmsIndex::where('card_name', "Certificate")->get();
        $partnership = CmsIndex::where('card_name', "Partnership")->get();
        $technology = CmsIndex::where('card_name', "Technology")->get();
        return Inertia::render('Dashboard/Web_Setting/Index', [
            'certificate' => $certificate,
            'partnership' => $partnership,
            'technology' => $technology,
        ]);
    }

    public function createPartnership()
    {

        return Inertia::render('Dashboard/Web_Setting/Partnership/Create');
    }

    public function createTechnology()
    {
        return Inertia::render('Dashboard/Web_Setting/Technology/Create');
    }

    public function createCertificate()
    {
        return Inertia::render('Dashboard/Web_Setting/Certificate/Create');
    }

    public function storeCertificate(WebSettingRequest $request)
    {
        try {
            $request->validate([
                'card_name' => ['required'],
                'name' => ['required'],
                'publisher_name' => ['required'],
                'short_description' => ['required'],
                'url' => ['nullable', 'url'],
                'image' => ['required', 'image'],
            ]);

            // Inisialisasi imagePath dengan null
            $imagePath = null;

            if ($request->hasFile('image')) {
                // Proses gambar dan simpan jika ada
                $imagePath = $request->file('image')->store('index/certificate/assets/img', 'public');
            }

            // Simpan data dengan atau tanpa gambar
            CmsIndex::create([
                'card_name' => $request->input('card_name'),
                'name' => $request->input('name'),
                'publisher_name' => $request->input('publisher_name'),
                'short_description' => $request->input('short_description'),
                'url' => $request->input('url'),
                'image' => $imagePath,
            ]);

            return to_route('webSetting.index');
        } catch (\Exception) {
            return to_route('webSetting.index');
        }
    }

    public function storePartnershipTechnology(WebSettingRequest $request)
    {
        try {
            $request->validate([
                'card_name' => ['required'],
                'name' => ['required'],
                'short_description' => ['required'],
                'url' => ['nullable', 'url'],
                'image' => ['required', 'image'],
            ]);

            if ($request->has('tech_category')) {
                $tech_category = $request->get('tech_category');
            } else {
                $tech_category = null;
            }

            // Inisialisasi imagePath dengan null
            $imagePath = null;

            // Proses gambar dan simpan jika ada
            if ($request->hasFile('image') && $request->input('card_name') === 'Partnership') {
                $imagePath = $request->file('image')->store('index/partnership/assets/img', 'public');
            } else if ($request->hasFile('image') && $request->input('card_name') === 'Technology') {
                $imagePath = $request->file('image')->store('index/technology/assets/img', 'public');
            }

            // Simpan data dengan atau tanpa gambar
            CmsIndex::create([
                'card_name' => $request->input('card_name'),
                'tech_category' => $tech_category,
                'name' => $request->input('name'),
                'publisher_name' => $request->input('publisher_name'),
                'short_description' => $request->input('short_description'),
                'url' => $request->input('url'),
                'image' => $imagePath,
            ]);

            return to_route('webSetting.index');
        } catch (\Exception) {
            return to_route('webSetting.index');
        }
    }

    public function editPartnership(CmsIndex $CmsIndex)
    {
        return Inertia::render('Dashboard/Web_Setting/Partnership/Edit', [
            'partnership' => $CmsIndex
        ]);
    }

    public function editTechnology(CmsIndex $CmsIndex)
    {
        return Inertia::render('Dashboard/Web_Setting/Technology/Edit', [
            'technology' => $CmsIndex
        ]);
    }

    public function editCertificate(CmsIndex $CmsIndex)
    {

        return Inertia::render('Dashboard/Web_Setting/Certificate/Edit', [
            'certificate' => $CmsIndex,
        ]);
    }

    public function updateCertificate(Request $request, CmsIndex $CmsIndex)
    {
        try {
            // dd($request->all());
            $request->validate([
                'card_name' => ['required'],
                'name' => ['required'],
                'publisher_name' => ['required'],
                'short_description' => ['required'],
            ]);

            if ($request->hasFile('image')) {
                // Hapus gambar lama jika ada dan simpan yang baru
                if (!empty($CmsIndex->image) && Storage::disk('public')->exists($CmsIndex->image)) {
                    Storage::disk('public')->delete($CmsIndex->image);
                }
                $imagePath = $request->file('image')->store('index/certificate/assets/img', 'public');
            } else {
                // Jika tidak ada gambar baru, biarkan imagePath tetap sama
                $imagePath = $CmsIndex->image;
            }

            // Simpan data dengan atau tanpa gambar
            $CmsIndex->card_name = $request->input('card_name');
            $CmsIndex->name = $request->input('name');
            $CmsIndex->publisher_name = $request->input('publisher_name');
            $CmsIndex->short_description = $request->input('short_description');
            $CmsIndex->url = $request->input('url');
            $CmsIndex->image = $imagePath;
            $CmsIndex->save();

            return to_route('webSetting.index');
        } catch (\Exception) {
            return to_route('webSetting.index');
        }
    }

    public function updatePartnershipTechnology(Request $request, CmsIndex $CmsIndex)
    {
        // dd($request->all());
        try {
            $request->validate([
                'card_name' => ['required'],
                'name' => ['required'],
                'short_description' => ['required'],
            ]);

            // Hapus gambar lama jika ada dan simpan yang baru
            if ($request->hasFile('image') && $request->input('card_name') === 'Partnership') {
                if (!empty($CmsIndex->image) && Storage::disk('public')->exists($CmsIndex->image)) {
                    Storage::disk('public')->delete($CmsIndex->image);
                }
                $imagePath = $request->file('image')->store('index/partnership/assets/img', 'public');
            } else if ($request->hasFile('image') && $request->input('card_name') === 'Technology') {
                if (!empty($CmsIndex->image) && Storage::disk('public')->exists($CmsIndex->image)) {
                    Storage::disk('public')->delete($CmsIndex->image);
                }
                $imagePath = $request->file('image')->store('index/technology/assets/img', 'public');
            } else {
                // Jika tidak ada gambar baru, biarkan imagePath tetap sama
                $imagePath = $CmsIndex->image;
            }

            // Simpan data dengan atau tanpa gambar
            $CmsIndex->card_name = $request->input('card_name');
            $CmsIndex->name = $request->input('name');
            $CmsIndex->tech_category = $request->input('tech_category');
            $CmsIndex->short_description = $request->input('short_description');
            $CmsIndex->url = $request->input('url');
            $CmsIndex->image = $imagePath;
            $CmsIndex->save();

            return to_route('webSetting.index');
        } catch (\Exception) {
            return to_route('webSetting.index');
        }
    }

    public function destroy(CmsIndex $CmsIndex)
    {
        $imagePath = $CmsIndex->image;
        if (!empty($imagePath) && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        } else {
            $imagePath = '';
        }

        $CmsIndex->delete();
        return redirect()->route('webSetting.index');
    }
}
