/**
 * Created by sha on 11/19/13.
 */

/*
app:    gene
name:   spy.js
desc:   only spy function, for onload event
 */

/*
name:   spy
 */

$2 = spy;

function spy(task, when, prey) {

    //	no prey?

    prey = prey || window;

    //	spy works at all things appear

    when = when || "load";

    //	let him wait

    prey.addEventListener(when, task)
}