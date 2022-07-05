import Validator from "validatorjs";

export function validate(data, rules) {
	const validator = new Validator(data, rules);

	if (validator.fails()) return [false, validator.errors.all()];
	else return [true, validator.input];
}
