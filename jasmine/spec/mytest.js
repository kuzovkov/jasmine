var s = [
		{type: 'email', val: 'tester@mail.com', exp: true},
		{type: 'email', val: 'testermail.com', exp: false},
		{type: 'passport', val: '0301 123456', exp: true},
		{type: 'passport', val: '21212g1', exp: false},
		{type: 'time', val: '12:01:15', exp: true},
		{type: 'time', val: '1a-01.15', exp: false}

	];

describe("Test is_valid(val, type) var 1", function() {
  	
		afterEach(function(){
			console.log('after');		  
		});
		
		var str = "test is_valid()";
		it(str, function() {
			for (var i = 0; i < s.length; i++){
				var res = is_valid(s[i].val, s[i].type);
				console.log(s[i].val);
				expect(res).toBe(s[i].exp);
			}
		});
		
});







