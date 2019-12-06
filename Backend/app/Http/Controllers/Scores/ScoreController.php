<?php

namespace App\Http\Controllers\Scores;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Match;
use App\Models\Math_problem;
use App\Models\Ranking;
use App\Models\User;

class ScoreController extends Controller
{
    public function updateRankingRecord($currentMatch)
    {
        Ranking::where('users_id', auth()->user()->id)
            ->where('mathoperation_id', $currentMatch['mathoperation_id'])
            ->update(['match_id' => $currentMatch['id']]);

        // dd("YOU GOT TO BE UPDATED, MEIN BRUDER!");

        return $currentMatch;
    }

    public function verifyBestMatch($user, $current)
    {
        $rankingRecord = Ranking::where('mathoperation_id', $current['mathoperation_id'])->where('users_id', $user)->get();


        if (!$rankingRecord->count()) {

            Ranking::create([
                'match_id' => $current['id'],
                'mathoperation_id' => $current['mathoperation_id'],
                'users_id' => auth()->user()->id,
            ]);

            // print_r("Tô aqui no primeiro if");

            return $current;
        } else {
            $score = Match::where('id', $rankingRecord[0]['match_id'])->get();

            if ((intval($score[0]['score']) < $current['score'] and intval($score[0]['time']) > $current['time'])) {

                return $this->updateRankingRecord($current);
            } elseif (intval($score[0]['score']) < $current['score'] and intval($score[0]['time']) <= $current['time']) {

                return $this->updateRankingRecord($current);
            } elseif (intval($score[0]['score']) == $current['score'] and intval($score[0]['time']) > $current['time']) {

                return $this->updateRankingRecord($current);
            } elseif (intval($score[0]['score']) == $current['score'] and intval($score[0]['time']) == $current['time']) {

                return $this->updateRankingRecord($current);
            } else {

                return $current;
            }
        }
    }

    // public function testVerifyBestMatch()
    // {

    //     $current = Match::create([
    //         'score' => 10010,
    //         'time'  => 7,
    //         'mathoperation_id' => 1,
    //         'users_id' => auth()->id(),
    //     ]);
    //     $match = $this->verifyBestMatch(1, auth()->user()->id, $current);

    //     return response()->json(
    //         [
    //             'message' => 'congratulations',
    //             'data' => $match,
    //         ],
    //         200,
    //         ['Content-type' => 'application/json; charset=utf-8'],
    //         JSON_UNESCAPED_UNICODE
    //     );
    // }

    public function registerMatch(Request $request)
    {
        $match = Match::create([
            'score' => $request->score,
            'time'  => $request->time,
            'mathoperation_id' => $request->operation,
            'users_id' => auth()->id(),
        ]);

        $recordedMatch = $this->verifyBestMatch(auth()->user()->id, $match);

        return response()->json(
            [
                'message' => 'congratulations',
                'data' => $recordedMatch,
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
