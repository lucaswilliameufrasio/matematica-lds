<?php

namespace App\Http\Controllers\MathProblems;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Math_problem;

class MathProblemsController extends Controller
{
    public function retStage($hits)
    {
        if ($hits <= 9) {
            return 1;
        } else if ($hits > 9 or $hits <= 15) {
            return 2;
        } else if ($hits > 15) {
            return 3;
        }
    }

    public function genMathProblem(Request $request)
    {
        $stage = $this->retStage($request->hits);

        $problem = Math_problem::where('mathoperation_id', $request->operation)->where('stage', $stage)->get()->random(1);

        return $problem;
    }

    public function retOneMathProblem(Request $request)
    {
        return response()->json(
            [
                'data' => $this->genMathProblem($request),
            ],
            200,
            ['Content-type' => 'application/json; charset=utf-8'],
            JSON_UNESCAPED_UNICODE
        );
    }
}
