# Service

Here, classes that implement the interfaces of some external service are created.

For example, we could be working with an external API, which has its libraries and ways of working.

An interface of service is created within `app/ports`, so that the use cases only abstract themselves to use the implementations of that interface.

Now within this folder, that interface is implemented by executing the corresponding methods of that external library.
