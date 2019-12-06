<?php

namespace App\Http\Controllers\Rankings;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ranking;
use Illuminate\Support\Facades\DB;

class RankingsController extends Controller
{
    public function showUserRanking($operation)
    {
        $ranking = DB::table('rankings')
        ->join('users', 'rankings.users_id', '=', 'users.id')
        ->join('matches', 'rankings.match_id', '=', 'matches.id')
        ->select('users.id as userid', 'users.name as name' ,'matches.score as score', 'matches.time as time')
        ->where('rankings.mathoperation_id', $operation)
        ->orderBy('matches.score', 'DESC')
        ->orderBy('matches.time', 'ASC')
        ->get();

        $yourPos = Ranking::select('users_id as myid')->where("mathoperation_id", $operation)
            ->where('users_id', auth()->user()->id)
            ->get();

        return response()->json(
            [
                'data' => $ranking,
                'myposition' => $yourPos,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
