<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ranking extends Model
{
    protected $fillable = [
        'match_id', 'mathoperation_id', 'users_id'
    ];

    // public function users(){
    //     return $this->belongsToMany('App\Models\User', 'users_rankings', 'rankings_id', 'users_id')
    //     ->withPivot('score')
    //     ->withTimestamps();
    // }
}
