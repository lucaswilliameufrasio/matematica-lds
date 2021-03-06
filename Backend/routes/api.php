<?php

use Illuminate\Http\Request;

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

// Route::get('pivottable', 'Ranking\RankingController@teste'); // Teste Many-to-Many

//Rota raiz é apenas para verificar se a API está funcional
Route::get('', function () {
    return response()->json(
        [
            'success' => true,
            'data' => 'Oi, bebê'
        ],
        200,
        ['Content-type' => 'application/json; charset=utf-8'],
        JSON_UNESCAPED_UNICODE
    );
});

//Rotas de autenticação abertas
Route::group([
    'prefix' => 'auth'

], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'Users\UserController@registerUser');
});

//Rotas de autenticação protegidas
Route::group([
    'middleware' => 'jwt.verify',
    'prefix' => 'auth'

], function () {
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'Users\UserController@me');
    Route::patch('updateMe', 'Users\UserController@updateUser');
});

//Rotas protegidas
Route::group([
    'middleware' => 'jwt.verify',

], function () {
    Route::post('getMathProblem', 'MathProblems\MathProblemsController@retOneMathProblem');
    Route::post('verifyAnswer', 'MathProblems\AnswerController@verifyAnswer');
    Route::post('endGame', 'Scores\ScoreController@registerMatch');

    Route::get('listMyMatches/{operation}', 'Matches\MatchesController@listAllMatches');
    // Route::get('testValidateRanking', 'Scores\ScoreController@testVerifyBestMatch');
    Route::get('showRank/{operation}', 'Rankings\RankingsController@showUserRanking');

});


