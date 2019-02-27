<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
class TasksController extends Controller
{
    public function index(){
        /*$tasks = Task::all();
        $name = "You";
        return view('tasks.index', compact('tasks', 'name'));*/
        $tasks = Task::paginate(7);
        return $tasks;
    }
    public function detail(Task $task){
        return view('tasks.detail', compact('task'));
    }
}
