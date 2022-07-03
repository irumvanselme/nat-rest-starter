export default function FormControl({
    label = "",
    textarea = false,
    name = "input-1",
    ...props
}) {
    return (
        <div className="w-100 mt-3">
            <div className="mb-3">
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
                {textarea ? (
                    <textarea
                        className="form-control"
                        name={name}
                        id={name}
                        rows={5}
                        {...props}
                    ></textarea>
                ) : (
                    <input
                        className="form-control"
                        name={name}
                        id={name}
                        {...props}
                    />
                )}
            </div>
        </div>
    );
}
