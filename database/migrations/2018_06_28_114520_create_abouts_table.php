<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAboutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('aboutUs')->nullable();
            $table->string('mondayFrom')->nullable();
            $table->string('mondayTo')->nullable();
            $table->string('tuesdayFrom')->nullable();
            $table->string('tuesdayTo')->nullable();
            $table->string('wednesdayFrom')->nullable();
            $table->string('wednesdayTo')->nullable();
            $table->string('thursdayFrom')->nullable();
            $table->string('thursdayTo')->nullable();
            $table->string('fridayFrom')->nullable();
            $table->string('fridayTo')->nullable();
            $table->string('saturdayFrom')->nullable();
            $table->string('saturdayTo')->nullable();
            $table->string('sundayFrom')->nullable();
            $table->string('sundayTo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abouts');
    }
}
