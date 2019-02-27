<?php

use Illuminate\Database\Seeder;

class TasksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for($i = 0; $i < 1000; $i++) {
            App\Task::create([
                'body' => $faker->text($maxNbChars = 400),
                'title' => $faker->text($maxNbChars = 100),
                'start_at' => $faker->date($format = 'Y-m-d H:i:s', $max = 'now'),
                'end_at' => $faker->date($format = 'Y-m-d H:i:s', $max = 'now'),
                'created_at' => $faker->date($format = 'Y-m-d H:i:s', $max = 'now'),
                'updated_at' => $faker->date($format = 'Y-m-d H:i:s', $max = 'now')
            ]);
    }
    }
}
