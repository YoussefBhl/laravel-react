@extends('layout')

@section('content')
        <div>
            <ul>
                @foreach($tasks as $task)
                    <li>
                        <a href="/tasks/{{$task->id}}"> {{$task->body}}
                        </a>
                    </li>
                @endforeach
            </ul>
            <h1>Hello {{ $name }}</h1>
@endsection