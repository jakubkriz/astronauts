# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
astronauts = [
  [ "John", "Doe", [1990, 2, 12], "invisibility"],
  [ "Jack", "Jones", [1978, 11, 2], "healing"],
  [ "David", "Dope", [1956, 4, 23], "strength"]
]

astronauts.each do |firstname, lastname, birthdate, superpower|
  astronaut = Astronaut.
    where(firstname: firstname).
    where(lastname: lastname).
    where(birthdate: Date.new(birthdate[0], birthdate[1], birthdate[2])).
    where(superpower: superpower).first_or_initialize
  astronaut.save!
end
