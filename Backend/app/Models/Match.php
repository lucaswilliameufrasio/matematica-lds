<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    protected $fillable = [
        'score', 'time', 'mathoperation_id', 'users_id'
    ];

}
