<?php

namespace Modules\BemolDigitalLaravelChallenge\Presentation\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class BemolDigitalLaravelChallengeController extends Controller
{
    
    public function index()
    {
        return view('bemoldigitallaravelchallenge::angular.src.index');
    }

}
