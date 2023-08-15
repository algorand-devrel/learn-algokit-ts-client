import beaker
import pyteal as pt

app = beaker.Application("calculator")


@app.external
def add(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Add b to a"""
    return output.set(a.get() + b.get())


@app.external
def sub(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Subtract b from a"""
    return output.set(a.get() - b.get())


@app.external
def div(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Divide a by b"""
    return output.set(a.get() / b.get())


@app.external
def mul(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Multiply a and b"""
    return output.set(a.get() * b.get())
