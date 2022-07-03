export const noContextProviderFound = (context: string) => {
    throw new Error("Found no provider for the " + context);
};
