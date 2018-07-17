// ============================
// Assignment: Intro to MongoDB
// ============================
//
// 1. use my_first_db
//
// 2. db.createCollection('students')
//
// 3. Done
//
// 4. db.students.insert({name: 'Carmelo', home_state: 'CA', lucky_number: 6, birthday: {month: 4, day: 12, year: 1990}})
// 4. db.students.insert({name: 'Felipe', home_state: 'TX', lucky_number: 2, birthday: {month: 1, day: 14, year: 1998}})
// 4. db.students.insert({name: 'Aurelio', home_state: 'ATL', lucky_number: 48, birthday: {month: 7, day: 6, year: 1987}})
// 4. db.students.insert({name: 'Francisco', home_state: 'NY', lucky_number: 31, birthday: {month: 10, day: 21, year: 1987}})
// 4. db.students.insert({name: 'Iris', home_state: 'FL', lucky_number: 64, birthday: {month: 12, day: 9, year: 2009}})
//
// 5. db.students.find()
//
// 6. db.students.find({home_state : {$in: ['CA','FL']}}).
//
// 7.1 db.students.find({lucky_number: {$gt: 31  }})
// 7.2 db.students.find({lucky_number: {$lte:20  }})
// 7.3 db.students.find({lucky_number: {$gte: 2, $lte: 31} })
//
// 8. db.students.updateMany({}, {$push: {interests:['coding','brunch','MongoDB']}})
//
// 9. db.students.update({_id:ObjectId("5b43d99f7a1876bad5e7dfd7")}, {$push: {interests:'stuff'}})
//
// 10. db.students.update({_id:ObjectId("5b43d99f7a1876bad5e7dfd7")}, {$push: {interests:'taxes'}})
//
// 11. db.students.update({_id:ObjectId("5b43d99f7a1876bad5e7dfd7")}, {$pop: {interests:-1}})
//
// 12. db.students.deleteMany({home_state:'WA'})
//
// 13. db.students.deleteOne({name:'Felipe'})
//
// 14. db.students.deleteOne({lucky_number: {$gt: 5}})
//
// 15. db.students.updateMany({}, {$set: {number_of_belts:0}})
//
// 16. db.students.updateMany({}, {$inc: {number_of_belts:1}})
//
// 17. db.students.updateMany({}, {$rename: {number_of_belts:'belts_earned'}})
//
// 18. db.students.updateMany({}, {$unset: {'lucky_number':''}})
//
// 19. db.students.updateMany({},{$currentDate: {updated_on:true}})
