import DynamicPackLogo from "./icons/DynamicPackLogo"

export default function InputForm() {
    return (
        <header className="flex items-center justify-center py-4 gap-2">
            <DynamicPackLogo className="rounded-md"/>
            <p className="font-medium">JSON Generator</p>
        </header>
    )
}