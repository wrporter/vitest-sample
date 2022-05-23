export default function hello(entity?: string) {
    return `Hello, ${entity ?? 'World'}!`;
}
