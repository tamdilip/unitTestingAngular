describe('myApp angular test cases', function(){ //describe your test case name
    beforeEach(module('myApp')); //load module
	
	var myController1, myController2, scope , myFact;

	beforeEach(inject(function ($rootScope, $controller, $httpBackend ,myFactory) { //inject and mock services as need
	scope = $rootScope.$new(); //mock a scope
	myFact = myFactory;
	httpBackend = $httpBackend;
	myController1 = $controller('myCtrl1', {$scope: scope}); //initialize the controller
	myController2 = $controller('myCtrl2');
	}));
	
	
	it('myCtrl1 scope object test', function () { //Test case
		expect(scope.label).toEqual('Label from Controller 1'); //test - label object access with 'scope'
	});
	

    it('myCtrl2 this(scope) object test', function(){  //Test case
        expect(myController2.label).toBe('Label from Controller 2'); //test - label object access with 'myController2'
    });

	
	it('Factory Test', function () { //Test case
		expect(myFact.fname).toEqual('Karma Test'); //test
	});

	it('Rest call test', function () {
		var returnData = {framework: 'Jasmine'}; //return data object
		httpBackend.expectGET("http://localhost:8080/").respond(returnData); //keep it ready to listen and respond to REST call
        myFact.get(); //call a function in factory
		httpBackend.flush(); //close all asynchronous callbacks
        expect(myFact.data).toEqual(returnData); //assertion
 
    });
	
	afterEach(function () { 
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
	

});