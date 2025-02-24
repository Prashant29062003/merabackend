# buffer 
1. ArrayBuffers 
~ Q. What are ArrayBuffers?
- An ArrayBuffer is a fixed-length raw binary data buffer.
It does not provide methods to manipulate data directly. Instead, you use views like DataView or TypedArray to interact with the data.

2. DataView
- What is DataView?

- A DataView allows you to read and write arbitrary data (e.g., integers, floats) at any offset within an ArrayBuffer.

- **Features**:
- Supports various data types (e.g., Int8, Uint16, Float32).
Provides control over endianness.