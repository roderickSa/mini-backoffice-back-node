# Ports

Interfaces that will need to be implemented.

There is an asymmetry in the architecture (for more info see [here](https://jmgarridopaz.github.io/content/hexagonalarchitecture.html#tc4) and [here](https://jmgarridopaz.github.io/content/hexagonalarchitecture.html#tc3)):

- The left ports are going to be implemented by the core or inner hexagon (The left adapter use this port to interact with the core).

- The right ports are going to be implemented by the adapters that will reside in `infrastructure`.
