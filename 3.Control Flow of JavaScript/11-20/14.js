/*
Note the semicolon used at the end of the do...while loop.
An important difference distinguishes the do-while loop from the while loop. In the dowhile loop, the statements in the construction always execute at least one time before
the condition can be tested; in a while loop, the statements may never execute if the
condition tested at the outset evaluates to false. So, just think of the do-while loop as a
while loop where the first statement gets executed no matter what.
Use a do-while loop when you know for certain that the looped statements are free to
run at least one time. If the condition may not be met the first time, use the while loop.
For many instances, the two constructions are interchangeable.
do{
 code block to be executed
}while(condition); 


*/