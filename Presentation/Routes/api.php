<?php

use Illuminate\Http\Request;
use Modules\BemolDigitalLaravelChallenge\Presentation\Http\Controllers\API\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/bemoldigitallaravelchallenge', function (Request $request) {
    return $request->user();
});*/


Route::prefix('/bemoldigitallaravelchallenge')->group(function() {
	Route::get('', [UserController::class, 'index'])->name('users.index');
    Route::get('{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::post('', [UserController::class, 'store'])->name('users.store');
    Route::put('{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('{user}', [UserController::class, 'destroy'])->name('users.destroy');
});