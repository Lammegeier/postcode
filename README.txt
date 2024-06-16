According to the test pyramid (Mike Coen) most test cases should be at the unit test level.

Hence there are more test cases in the qunit files than the python/behave/BDD test files.

Usually in a unit test there should be one assertion per test so that they fail for one reason,
but in this case I’ve made the call that in a couple of the scenarios it was better to test all the output fields at once.









