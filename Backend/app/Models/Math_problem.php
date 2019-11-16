<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Math_problem extends Model
{
    protected $fillable = [
        'problem',
        'result',
        'stage',
        'mathoperation_id',
    ];
}
