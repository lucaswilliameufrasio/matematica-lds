<?php

namespace App\Http\Controllers\Rankings;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ranking;

class RankingsController extends Controller
{
    public function showUserRanking($operation)
    {
        $ranking = Ranking::where("mathoperation_id", $operation)
            ->get();

        $yourPos = Ranking::where("mathoperation_id", $operation)
            ->where('users_id', auth()->user()->id)
            ->get();

        return response()->json(
            [
                'data' => $ranking,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
