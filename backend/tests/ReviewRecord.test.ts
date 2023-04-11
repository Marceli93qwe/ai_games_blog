import {ReviewRecord} from "../records/Review.record";

let testReviewRecord: ReviewRecord;

test("new ReviewRecord() test", () => {
    //should not throw
    expect(() => {
        testReviewRecord = new ReviewRecord(
            "test_id",
            "Test Game",
            "2022-05-11",
            "test",
            299,
            4124,
            "x",
            "2022-05-11",
            "test"
        );
    }).not.toThrow();
})
test("ReviewRecord.insert() tests", async () => {
    //method should not throw
    expect(async () => {
        await testReviewRecord.insert()
    }).not.toThrow();
    // console.log(await testReviewRecord.insert());
})

test(".getAll() tests", async () => {
    //method should not throw
    expect(async () => await ReviewRecord.getAll()).not.toThrow();
    // console.log(await ReviewRecord.getAll());
})
test("getOne() tests", async () => {
    //method should not throw
    expect(async () => {
        await ReviewRecord.getOne("test_id")
    }).not.toThrow();
    // console.log(await ReviewRecord.getOne('test_id'));
})

test("getAllIds() tests", async () => {
    //method should not throw
    expect(async () => {
        await ReviewRecord.getAllIds()
    }).not.toThrow();
    // console.log(await ReviewRecord.getAllIds());
})