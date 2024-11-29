<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CmsController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\CmsIndex;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Guest Route
Route::get('', function () {
    return Inertia::render('Main/Home/Index', [
        'technology' => CmsIndex::where('card_name', "Technology")->get(),
        'partnership' => CmsIndex::where('card_name', "Partnership")->get(),
    ]);
})->name('home.index');

Route::get('about', function () {
    return Inertia::render('Main/About/Index', [
        'certificate' => CmsIndex::where('card_name', "Certificate")->get(),
    ]);
})->name('about.index');

Route::get('it-services', function () {
    return Inertia::render('Main/IT-Services/Index');
})->name('it-services.index');

Route::get('training', function () {
    return Inertia::render('Main/Training/Index');
})->name('training.index');

Route::get('partnership', function () {
    return Inertia::render('Main/Partnership/Index');
})->name('partnership.index');

Route::get('contact-us', function () {
    return Inertia::render('Main/Contact/Index');
})->name('contact.index');

Route::get('blog', function () {
    return Inertia::render('Main/Blog/Index', [
        'categories' => Category::all(),
    ]);
})->name('blog.index');

Route::get('blog/{id}', [BlogController::class, 'show'])->name('blog.detail');

// Admin Route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Home/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

//blog route
Route::group(['middleware' => ['auth']], function () {
    Route::resource('/dashboard/blog', BlogController::class)->names([
        'index' => 'dashboard.blog.index',
        'create' => 'dashboard.blog.create',
        'store' => 'dashboard.blog.store',
        'show' => 'dashboard.blog.show',
        'edit' => 'dashboard.blog.edit',
        'update' => 'dashboard.blog.update',
        'destroy' => 'dashboard.blog.destroy',
    ]);
    Route::delete('/blog/deleteCategoriesOrTags/{type}/{id}', [BlogController::class, 'destroyCategoryOrTag'])->name('CategoriesOrTags.destroy');
    Route::get('/dashboard/CategoriesOrTagsAll', [BlogController::class, 'CategoriesTagsIndex'])->name('CategoriesOrTags.index');
    Route::post('/dashboard/blog/addCategoriesOrTags', [BlogController::class, 'storeCategoryOrTags'])->name('addCategoriesOrTags.store');
});

//cms route
Route::middleware('auth')->group(function () {
    Route::get('/dashboard/web-setting', [CmsController::class, 'index'])->name('webSetting.index');
    Route::get('/dashboard/web-setting/technology/create-certificate', [CmsController::class, 'createCertificate'])->name('webSetting.certificate.create');
    Route::get('/dashboard/web-setting/technology/create-partnership', [CmsController::class, 'createPartnership'])->name('webSetting.partnership.create');
    Route::get('/dashboard/web-setting/technology/create-technology', [CmsController::class, 'createTechnology'])->name('webSetting.technology.create');

    Route::post('/dashboard/web-setting/technology/store-certificate', [CmsController::class, 'storeCertificate'])->name('webSetting.certificate.store');
    Route::post('/dashboard/web-setting/technology/store', [CmsController::class, 'storePartnershipTechnology'])->name('webSetting.store');

    Route::get('/dashboard/web-setting/technology/{CmsIndex}/edit-certificate', [CmsController::class, 'editCertificate'])->name('webSetting.certificate.edit');
    Route::get('/dashboard/web-setting/technology/{CmsIndex}/edit-partnership', [CmsController::class, 'editPartnership'])->name('webSetting.partnership.edit');
    Route::get('/dashboard/web-setting/technology/{CmsIndex}/edit-technology', [CmsController::class, 'editTechnology'])->name('webSetting.technology.edit');

    Route::put('/dashboard/web-setting/technology/{CmsIndex}/update-certificate', [CmsController::class, 'updateCertificate'])->name('webSetting.certificate.update');
    Route::put('/dashboard/web-setting/technology/{CmsIndex}/update', [CmsController::class, 'updatePartnershipTechnology'])->name('webSetting.update');

    Route::delete('dashboard/web-setting/{CmsIndex}', [CmsController::class, 'destroy'])->name('webSetting.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/dashboard/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/dashboard/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
