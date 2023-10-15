function calculateTax(income: number, taxYear = 2023): number {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000)