export default function Footer() {
    const date =new Date().getFullYear();
    return (
        <div>
            <p>© ${date} My App. All rights reserved.</p>
        </div>
    )
}