export default function FormControl({
	label = "",
	textarea = false,
	errors = [],
	name = "input-1",
	...props
}) {
	return (
		<div className="w-100 mt-3">
			<div className="mb-3">
				<label
					htmlFor={name}
					className={
						"form-label fs-15 " +
						(errors.length > 0 ? "text-danger" : "")
					}
				>
					{label}
				</label>
				{textarea ? (
					<textarea
						className={
							"form-control " +
							(errors.length > 0 ? "is-invalid" : "")
						}
						name={name}
						id={name}
						rows={5}
						{...props}
					></textarea>
				) : (
					<input
						className={
							"form-control " +
							(errors.length > 0 ? "is-invalid" : "")
						}
						name={name}
						id={name}
						{...props}
					/>
				)}
				<span className="invalid-feedback fs-12">{errors[0]}</span>
			</div>
		</div>
	);
}
