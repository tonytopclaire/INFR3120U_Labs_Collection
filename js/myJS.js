// Lab6 AngularJS
var app = angular.module('lab6', []);
app.controller('myCtrl', function ($scope, $http) {
  $http.get("http://localhost:8080/data/").then(function (response) {
    console.log(response.data)
    $scope.devName = response.data.userName;
    $scope.contacts = {email: response.data.email, phone: response.data.phoneNumber}
	$scope.imageAddress = response.data.imageAddress;
  });
	$scope.faculty = "Faculty of Busienss and IT";
	$scope.university = { name: "University of Ontario Institute of Technology", url: "http://www.uoit.ca" };
	$scope.about = "This is Tony Wang, I graduated from Durham College in 2014 as a computer programmer analyst. Currently, Iam a 3rd year student in UOIT IT seriuty.In 2018, I recieved the NSERC award from Canadian Government.";
	$scope.skills = [
	{
		name: "IT sercriuty",
		text: "Advanced hacking and defence skills in IT."
	},
	{
		name: "Handcrafting",
		text: "Professional skills in home renovation, including plumbing and electricity installing and repairing skills."
		},
		{
		name: "Internet of Things- RFID",
		text: "Formal Researcher of UOIT."
		}
];
	$scope.prog_skills = ["C++", "C#", "Python", "Microsft SQL Server", "Java", "Test"];
	$scope.head = ["Couse Name", "Course Number", "Days & Time", "Instructor"];
	$scope.courses = [
	{
		CourseName: "Web Programming",
		CourseNumber: "INFR 3120",
		DaysAndTime: "Monday 2:10--3:30 \n Wednesday 2:10--3:30",
		Instructor: "Amirali Abari"
	},
	{
		CourseName: "Intro to Cloud Service",
		CourseNumber: "INFR 3600",
		DaysAndTime: "Monday 11:10--12:30 \n Wednesday 11:10--12:30",
		Instructor: "Garatte"
	},
	{
		CourseName: "Accounting for IT",
		CourseNumber: "INFR 2120",
		DaysAndTime: "Monday 2:10--3:30 \n Wednesday 2:10--3:30",
		Instructor: "Bic Ngo"
	}
	];
	$scope.sortType = 'name'; // set the default sort type
	$scope.sortReverse = false;  // set the default sort order
	$scope.searchFish = '';     // set the default search/filter

});