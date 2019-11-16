<?php

namespace App\Http\Controllers\Match;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Match;

class MatchesController extends Controller
{
    public function listAllMatches(){
        $list = Match::where('users_id', auth()->id())->get();

        return response()->json(
            [
                'data' => $list,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
