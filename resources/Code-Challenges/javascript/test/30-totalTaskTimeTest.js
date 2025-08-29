import { totalTaskTime } from "../JS_code_challenges/30-totalTaskTime.js";
import { expect } from "chai";

describe("30-totalTaskTime", function () {
    it("returns zero when there are no tasks", function () {
        expect(totalTaskTime([], 1)).to.equal(0);
    });
    it("handles two tasks and two threads", function () {
        expect(totalTaskTime([4, 2, 5], 1)).to.equal(11);
        expect(totalTaskTime([5, 8], 2)).to.equal(8);
        expect(totalTaskTime([4, 2, 10], 2)).to.equal(12);
    });
    it("handles tasks with three threads", function () {
        expect(totalTaskTime([5, 2, 6, 8, 7, 2], 3)).to.equal(12);
    });
});

// // SOLUTION
// function totalTaskTime(tasks, numThreads) {
//     let time = 0, shortest, threads;
//     while (tasks.length > numThreads) {
//         // extract a task for each thread
//         threads = tasks.splice(0, numThreads);
//         // Find out the time for the task that will finish first.
//         // Using the spread operator to provide Math.min with a list of values
//         shortest = Math.min(...threads);
//         // Add the time for that shortest task
//         time += shortest;
//         // Reduce each task in threads by the shortest task time and
//         // remove all of those completed "short" tasks
//         threads = threads.map(t => t - shortest).filter(t => t);
//         // Put any remaining tasks back into threads and do it again (loop)...
//         tasks = threads.concat(tasks);
//     }
//     // When num remaining tasks is less or equal to numThreads,
//     // we just need to add the time from the longest remaining task.
//     // The ternary protects against Math.max returning infinity on an empty array
//     return time + (tasks.length ? Math.max(...tasks) : 0);
// }

/* One-liner using different 'addition' approach */
// function totalTaskTime(tasks, numThreads) {
//   return tasks.length && Math.max(...tasks.reduce((b, t, i) => (b[b.indexOf(Math.min(...b))] += t) && b, tasks.splice(0, numThreads)));
// }