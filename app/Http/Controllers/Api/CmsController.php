<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CmsIndexResource;
use App\Models\CmsIndex;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CmsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $data = [
                'certificate' => CmsIndex::where('card_name', "Certificate")->get(),
                'partnership' => CmsIndex::where('card_name', "Partnership")->get(),
                'technology' => CmsIndex::where('card_name', "Technology")->get(),
            ];

            $result = [
                'certificate' => CmsIndexResource::collection($data['certificate']),
                'partnership' => CmsIndexResource::collection($data['partnership']),
                'technology' => CmsIndexResource::collection($data['technology']),
            ];

            return response()->json([
                'status' => true,
                'message' => "data CMS certificate, partnership, technology",
                'data' => $result
            ]);
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
