# Domain

In this folder, the classes necessary to properly contextualize the business we are working on will reside.

It's very important that the code living here only interacts with code from this same `domain` folder.

This is to avoid violating one of the principles of hexagonal architecture, where it is stated that the code belonging to the `domain` should only be able to interact with the code of the `domain`. The `domain` should not know about the implementation of the `port`, nor the implementations of the `infrastructure`.
