export default function Template({ children }: { children: React.ReactNode }) {
    return <>
        <div>
            <p>template </p>
            {children}
        </div>
    </>;
}