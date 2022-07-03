export default function Button({ title = "SAVE" }) {
    return (
        <div>
            <button className="btn btn-primary w-100 mt-5" type="submit">{title}</button>
        </div>
    )
}