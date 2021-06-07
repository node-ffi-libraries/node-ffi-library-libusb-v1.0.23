/*
 * This file was automatically generated. It is better to run the generator again, than to manually edit.
 *
 * @ffi-packager/ffi-generate v2.0.1
 * - git commit v2.0.1-1-g9e27804 on branch develop
 * - clang version 9.0.1-16
 * https://github.com/node-ffi-packager/node-ffi-generate
 *
 * File:
 * - Name: "libusb.h"
 * - SHA256: 294654175619f252fd3419e4a647c71d276de73b250fc4ed02e31f2cab258bec
 *
 * Generator options:
 * - Library: null
 * - Single file: true
 * - Prefixes: []
 * - Compiler arguments: []
 */

const FFI = require("ffi-napi");
const ref = require("ref-napi");
const ArrayType = require("ref-array-di")(ref);
const Struct = require("ref-struct-di")(ref);
const Union = require("ref-union-di")(ref);

const constants = {
  libusb_bos_type: {
    LIBUSB_BT_WIRELESS_USB_DEVICE_CAPABILITY: 1,
    LIBUSB_BT_USB_2_0_EXTENSION: 2,
    LIBUSB_BT_SS_USB_DEVICE_CAPABILITY: 3,
    LIBUSB_BT_CONTAINER_ID: 4,
    1: "LIBUSB_BT_WIRELESS_USB_DEVICE_CAPABILITY",
    2: "LIBUSB_BT_USB_2_0_EXTENSION",
    3: "LIBUSB_BT_SS_USB_DEVICE_CAPABILITY",
    4: "LIBUSB_BT_CONTAINER_ID",
  },
  libusb_capability: {
    LIBUSB_CAP_HAS_CAPABILITY: 0,
    LIBUSB_CAP_HAS_HOTPLUG: 1,
    LIBUSB_CAP_HAS_HID_ACCESS: 256,
    LIBUSB_CAP_SUPPORTS_DETACH_KERNEL_DRIVER: 257,
    0: "LIBUSB_CAP_HAS_CAPABILITY",
    1: "LIBUSB_CAP_HAS_HOTPLUG",
    256: "LIBUSB_CAP_HAS_HID_ACCESS",
    257: "LIBUSB_CAP_SUPPORTS_DETACH_KERNEL_DRIVER",
  },
  libusb_class_code: {
    LIBUSB_CLASS_PER_INTERFACE: 0,
    LIBUSB_CLASS_AUDIO: 1,
    LIBUSB_CLASS_COMM: 2,
    LIBUSB_CLASS_HID: 3,
    LIBUSB_CLASS_PHYSICAL: 5,
    LIBUSB_CLASS_PRINTER: 7,
    LIBUSB_CLASS_PTP: 6,
    LIBUSB_CLASS_IMAGE: 6,
    LIBUSB_CLASS_MASS_STORAGE: 8,
    LIBUSB_CLASS_HUB: 9,
    LIBUSB_CLASS_DATA: 10,
    LIBUSB_CLASS_SMART_CARD: 11,
    LIBUSB_CLASS_CONTENT_SECURITY: 13,
    LIBUSB_CLASS_VIDEO: 14,
    LIBUSB_CLASS_PERSONAL_HEALTHCARE: 15,
    LIBUSB_CLASS_DIAGNOSTIC_DEVICE: 220,
    LIBUSB_CLASS_WIRELESS: 224,
    LIBUSB_CLASS_APPLICATION: 254,
    LIBUSB_CLASS_VENDOR_SPEC: 255,
    0: "LIBUSB_CLASS_PER_INTERFACE",
    1: "LIBUSB_CLASS_AUDIO",
    2: "LIBUSB_CLASS_COMM",
    3: "LIBUSB_CLASS_HID",
    5: "LIBUSB_CLASS_PHYSICAL",
    7: "LIBUSB_CLASS_PRINTER",
    6: "LIBUSB_CLASS_PTP",
    6: "LIBUSB_CLASS_IMAGE",
    8: "LIBUSB_CLASS_MASS_STORAGE",
    9: "LIBUSB_CLASS_HUB",
    10: "LIBUSB_CLASS_DATA",
    11: "LIBUSB_CLASS_SMART_CARD",
    13: "LIBUSB_CLASS_CONTENT_SECURITY",
    14: "LIBUSB_CLASS_VIDEO",
    15: "LIBUSB_CLASS_PERSONAL_HEALTHCARE",
    220: "LIBUSB_CLASS_DIAGNOSTIC_DEVICE",
    224: "LIBUSB_CLASS_WIRELESS",
    254: "LIBUSB_CLASS_APPLICATION",
    255: "LIBUSB_CLASS_VENDOR_SPEC",
  },
  libusb_descriptor_type: {
    LIBUSB_DT_DEVICE: 1,
    LIBUSB_DT_CONFIG: 2,
    LIBUSB_DT_STRING: 3,
    LIBUSB_DT_INTERFACE: 4,
    LIBUSB_DT_ENDPOINT: 5,
    LIBUSB_DT_BOS: 15,
    LIBUSB_DT_DEVICE_CAPABILITY: 16,
    LIBUSB_DT_HID: 33,
    LIBUSB_DT_REPORT: 34,
    LIBUSB_DT_PHYSICAL: 35,
    LIBUSB_DT_HUB: 41,
    LIBUSB_DT_SUPERSPEED_HUB: 42,
    LIBUSB_DT_SS_ENDPOINT_COMPANION: 48,
    1: "LIBUSB_DT_DEVICE",
    2: "LIBUSB_DT_CONFIG",
    3: "LIBUSB_DT_STRING",
    4: "LIBUSB_DT_INTERFACE",
    5: "LIBUSB_DT_ENDPOINT",
    15: "LIBUSB_DT_BOS",
    16: "LIBUSB_DT_DEVICE_CAPABILITY",
    33: "LIBUSB_DT_HID",
    34: "LIBUSB_DT_REPORT",
    35: "LIBUSB_DT_PHYSICAL",
    41: "LIBUSB_DT_HUB",
    42: "LIBUSB_DT_SUPERSPEED_HUB",
    48: "LIBUSB_DT_SS_ENDPOINT_COMPANION",
  },
  libusb_endpoint_direction: {
    LIBUSB_ENDPOINT_IN: 128,
    LIBUSB_ENDPOINT_OUT: 0,
    128: "LIBUSB_ENDPOINT_IN",
    0: "LIBUSB_ENDPOINT_OUT",
  },
  libusb_error: {
    LIBUSB_SUCCESS: 0,
    LIBUSB_ERROR_IO: -1,
    LIBUSB_ERROR_INVALID_PARAM: -2,
    LIBUSB_ERROR_ACCESS: -3,
    LIBUSB_ERROR_NO_DEVICE: -4,
    LIBUSB_ERROR_NOT_FOUND: -5,
    LIBUSB_ERROR_BUSY: -6,
    LIBUSB_ERROR_TIMEOUT: -7,
    LIBUSB_ERROR_OVERFLOW: -8,
    LIBUSB_ERROR_PIPE: -9,
    LIBUSB_ERROR_INTERRUPTED: -10,
    LIBUSB_ERROR_NO_MEM: -11,
    LIBUSB_ERROR_NOT_SUPPORTED: -12,
    LIBUSB_ERROR_OTHER: -99,
    0: "LIBUSB_SUCCESS",
    "-1": "LIBUSB_ERROR_IO",
    "-2": "LIBUSB_ERROR_INVALID_PARAM",
    "-3": "LIBUSB_ERROR_ACCESS",
    "-4": "LIBUSB_ERROR_NO_DEVICE",
    "-5": "LIBUSB_ERROR_NOT_FOUND",
    "-6": "LIBUSB_ERROR_BUSY",
    "-7": "LIBUSB_ERROR_TIMEOUT",
    "-8": "LIBUSB_ERROR_OVERFLOW",
    "-9": "LIBUSB_ERROR_PIPE",
    "-10": "LIBUSB_ERROR_INTERRUPTED",
    "-11": "LIBUSB_ERROR_NO_MEM",
    "-12": "LIBUSB_ERROR_NOT_SUPPORTED",
    "-99": "LIBUSB_ERROR_OTHER",
  },
  libusb_hotplug_event: {
    LIBUSB_HOTPLUG_EVENT_DEVICE_ARRIVED: 1,
    LIBUSB_HOTPLUG_EVENT_DEVICE_LEFT: 2,
    1: "LIBUSB_HOTPLUG_EVENT_DEVICE_ARRIVED",
    2: "LIBUSB_HOTPLUG_EVENT_DEVICE_LEFT",
  },
  libusb_hotplug_flag: {
    LIBUSB_HOTPLUG_NO_FLAGS: 0,
    LIBUSB_HOTPLUG_ENUMERATE: 1,
    0: "LIBUSB_HOTPLUG_NO_FLAGS",
    1: "LIBUSB_HOTPLUG_ENUMERATE",
  },
  libusb_iso_sync_type: {
    LIBUSB_ISO_SYNC_TYPE_NONE: 0,
    LIBUSB_ISO_SYNC_TYPE_ASYNC: 1,
    LIBUSB_ISO_SYNC_TYPE_ADAPTIVE: 2,
    LIBUSB_ISO_SYNC_TYPE_SYNC: 3,
    0: "LIBUSB_ISO_SYNC_TYPE_NONE",
    1: "LIBUSB_ISO_SYNC_TYPE_ASYNC",
    2: "LIBUSB_ISO_SYNC_TYPE_ADAPTIVE",
    3: "LIBUSB_ISO_SYNC_TYPE_SYNC",
  },
  libusb_iso_usage_type: {
    LIBUSB_ISO_USAGE_TYPE_DATA: 0,
    LIBUSB_ISO_USAGE_TYPE_FEEDBACK: 1,
    LIBUSB_ISO_USAGE_TYPE_IMPLICIT: 2,
    0: "LIBUSB_ISO_USAGE_TYPE_DATA",
    1: "LIBUSB_ISO_USAGE_TYPE_FEEDBACK",
    2: "LIBUSB_ISO_USAGE_TYPE_IMPLICIT",
  },
  libusb_log_cb_mode: {
    LIBUSB_LOG_CB_GLOBAL: 1,
    LIBUSB_LOG_CB_CONTEXT: 2,
    1: "LIBUSB_LOG_CB_GLOBAL",
    2: "LIBUSB_LOG_CB_CONTEXT",
  },
  libusb_log_level: {
    LIBUSB_LOG_LEVEL_NONE: 0,
    LIBUSB_LOG_LEVEL_ERROR: 1,
    LIBUSB_LOG_LEVEL_WARNING: 2,
    LIBUSB_LOG_LEVEL_INFO: 3,
    LIBUSB_LOG_LEVEL_DEBUG: 4,
    0: "LIBUSB_LOG_LEVEL_NONE",
    1: "LIBUSB_LOG_LEVEL_ERROR",
    2: "LIBUSB_LOG_LEVEL_WARNING",
    3: "LIBUSB_LOG_LEVEL_INFO",
    4: "LIBUSB_LOG_LEVEL_DEBUG",
  },
  libusb_option: {
    LIBUSB_OPTION_LOG_LEVEL: 0,
    LIBUSB_OPTION_USE_USBDK: 1,
    0: "LIBUSB_OPTION_LOG_LEVEL",
    1: "LIBUSB_OPTION_USE_USBDK",
  },
  libusb_request_recipient: {
    LIBUSB_RECIPIENT_DEVICE: 0,
    LIBUSB_RECIPIENT_INTERFACE: 1,
    LIBUSB_RECIPIENT_ENDPOINT: 2,
    LIBUSB_RECIPIENT_OTHER: 3,
    0: "LIBUSB_RECIPIENT_DEVICE",
    1: "LIBUSB_RECIPIENT_INTERFACE",
    2: "LIBUSB_RECIPIENT_ENDPOINT",
    3: "LIBUSB_RECIPIENT_OTHER",
  },
  libusb_request_type: {
    LIBUSB_REQUEST_TYPE_STANDARD: 0,
    LIBUSB_REQUEST_TYPE_CLASS: 32,
    LIBUSB_REQUEST_TYPE_VENDOR: 64,
    LIBUSB_REQUEST_TYPE_RESERVED: 96,
    0: "LIBUSB_REQUEST_TYPE_STANDARD",
    32: "LIBUSB_REQUEST_TYPE_CLASS",
    64: "LIBUSB_REQUEST_TYPE_VENDOR",
    96: "LIBUSB_REQUEST_TYPE_RESERVED",
  },
  libusb_speed: {
    LIBUSB_SPEED_UNKNOWN: 0,
    LIBUSB_SPEED_LOW: 1,
    LIBUSB_SPEED_FULL: 2,
    LIBUSB_SPEED_HIGH: 3,
    LIBUSB_SPEED_SUPER: 4,
    LIBUSB_SPEED_SUPER_PLUS: 5,
    0: "LIBUSB_SPEED_UNKNOWN",
    1: "LIBUSB_SPEED_LOW",
    2: "LIBUSB_SPEED_FULL",
    3: "LIBUSB_SPEED_HIGH",
    4: "LIBUSB_SPEED_SUPER",
    5: "LIBUSB_SPEED_SUPER_PLUS",
  },
  libusb_ss_usb_device_capability_attributes: {
    LIBUSB_BM_LTM_SUPPORT: 2,
    2: "LIBUSB_BM_LTM_SUPPORT",
  },
  libusb_standard_request: {
    LIBUSB_REQUEST_GET_STATUS: 0,
    LIBUSB_REQUEST_CLEAR_FEATURE: 1,
    LIBUSB_REQUEST_SET_FEATURE: 3,
    LIBUSB_REQUEST_SET_ADDRESS: 5,
    LIBUSB_REQUEST_GET_DESCRIPTOR: 6,
    LIBUSB_REQUEST_SET_DESCRIPTOR: 7,
    LIBUSB_REQUEST_GET_CONFIGURATION: 8,
    LIBUSB_REQUEST_SET_CONFIGURATION: 9,
    LIBUSB_REQUEST_GET_INTERFACE: 10,
    LIBUSB_REQUEST_SET_INTERFACE: 11,
    LIBUSB_REQUEST_SYNCH_FRAME: 12,
    LIBUSB_REQUEST_SET_SEL: 48,
    LIBUSB_SET_ISOCH_DELAY: 49,
    0: "LIBUSB_REQUEST_GET_STATUS",
    1: "LIBUSB_REQUEST_CLEAR_FEATURE",
    3: "LIBUSB_REQUEST_SET_FEATURE",
    5: "LIBUSB_REQUEST_SET_ADDRESS",
    6: "LIBUSB_REQUEST_GET_DESCRIPTOR",
    7: "LIBUSB_REQUEST_SET_DESCRIPTOR",
    8: "LIBUSB_REQUEST_GET_CONFIGURATION",
    9: "LIBUSB_REQUEST_SET_CONFIGURATION",
    10: "LIBUSB_REQUEST_GET_INTERFACE",
    11: "LIBUSB_REQUEST_SET_INTERFACE",
    12: "LIBUSB_REQUEST_SYNCH_FRAME",
    48: "LIBUSB_REQUEST_SET_SEL",
    49: "LIBUSB_SET_ISOCH_DELAY",
  },
  libusb_supported_speed: {
    LIBUSB_LOW_SPEED_OPERATION: 1,
    LIBUSB_FULL_SPEED_OPERATION: 2,
    LIBUSB_HIGH_SPEED_OPERATION: 4,
    LIBUSB_SUPER_SPEED_OPERATION: 8,
    1: "LIBUSB_LOW_SPEED_OPERATION",
    2: "LIBUSB_FULL_SPEED_OPERATION",
    4: "LIBUSB_HIGH_SPEED_OPERATION",
    8: "LIBUSB_SUPER_SPEED_OPERATION",
  },
  libusb_transfer_flags: {
    LIBUSB_TRANSFER_SHORT_NOT_OK: 1,
    LIBUSB_TRANSFER_FREE_BUFFER: 2,
    LIBUSB_TRANSFER_FREE_TRANSFER: 4,
    LIBUSB_TRANSFER_ADD_ZERO_PACKET: 8,
    1: "LIBUSB_TRANSFER_SHORT_NOT_OK",
    2: "LIBUSB_TRANSFER_FREE_BUFFER",
    4: "LIBUSB_TRANSFER_FREE_TRANSFER",
    8: "LIBUSB_TRANSFER_ADD_ZERO_PACKET",
  },
  libusb_transfer_status: {
    LIBUSB_TRANSFER_COMPLETED: 0,
    LIBUSB_TRANSFER_ERROR: 1,
    LIBUSB_TRANSFER_TIMED_OUT: 2,
    LIBUSB_TRANSFER_CANCELLED: 3,
    LIBUSB_TRANSFER_STALL: 4,
    LIBUSB_TRANSFER_NO_DEVICE: 5,
    LIBUSB_TRANSFER_OVERFLOW: 6,
    0: "LIBUSB_TRANSFER_COMPLETED",
    1: "LIBUSB_TRANSFER_ERROR",
    2: "LIBUSB_TRANSFER_TIMED_OUT",
    3: "LIBUSB_TRANSFER_CANCELLED",
    4: "LIBUSB_TRANSFER_STALL",
    5: "LIBUSB_TRANSFER_NO_DEVICE",
    6: "LIBUSB_TRANSFER_OVERFLOW",
  },
  libusb_transfer_type: {
    LIBUSB_TRANSFER_TYPE_CONTROL: 0,
    LIBUSB_TRANSFER_TYPE_ISOCHRONOUS: 1,
    LIBUSB_TRANSFER_TYPE_BULK: 2,
    LIBUSB_TRANSFER_TYPE_INTERRUPT: 3,
    LIBUSB_TRANSFER_TYPE_BULK_STREAM: 4,
    0: "LIBUSB_TRANSFER_TYPE_CONTROL",
    1: "LIBUSB_TRANSFER_TYPE_ISOCHRONOUS",
    2: "LIBUSB_TRANSFER_TYPE_BULK",
    3: "LIBUSB_TRANSFER_TYPE_INTERRUPT",
    4: "LIBUSB_TRANSFER_TYPE_BULK_STREAM",
  },
  libusb_usb_2_0_extension_attributes: {
    LIBUSB_BM_LPM_SUPPORT: 2,
    2: "LIBUSB_BM_LPM_SUPPORT",
  },
};

// NOTE: defining individual types as "global" constants to be able to reference them without any prefix, but also under the "types" object to be able to reference them recursively.
const types = {};

const js_uchar = ref.types.uchar;
const js_int32 = ref.types.int32;
const js_void = ref.types.void;
const js_voidPointer = ref.refType(js_void);
const libusb_context = js_voidPointer;
const libusb_contextPointer = ref.refType(libusb_context);
const js_uint32 = ref.types.uint32;
const js_CString = ref.types.CString;
const libusb_log_cb = FFI.Function(ref.types.void, [
  libusb_context,
  js_uint32,
  js_CString,
]);
const js_ushort = ref.types.ushort;
const __uint16_t = js_ushort;
const uint16_t = __uint16_t;
const libusb_version = Struct({
  major: uint16_t,
  minor: uint16_t,
  micro: uint16_t,
  nano: uint16_t,
  rc: js_CString,
  describe: js_CString,
});
const __uint32_t = js_uint32;
const uint32_t = __uint32_t;
const js_long = ref.types.long;
const __ssize_t = js_long;
const ssize_t = __ssize_t;
const libusb_device = js_voidPointer;
const libusb_devicePointer = ref.refType(libusb_device);
const libusb_device_handle = js_voidPointer;
const libusb_device_handlePointer = ref.refType(libusb_device_handle);
const js_int32Pointer = ref.refType(js_int32);
const __uint8_t = js_uchar;
const uint8_t = __uint8_t;
const libusb_device_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bcdUSB: uint16_t,
  bDeviceClass: uint8_t,
  bDeviceSubClass: uint8_t,
  bDeviceProtocol: uint8_t,
  bMaxPacketSize0: uint8_t,
  idVendor: uint16_t,
  idProduct: uint16_t,
  bcdDevice: uint16_t,
  iManufacturer: uint8_t,
  iProduct: uint8_t,
  iSerialNumber: uint8_t,
  bNumConfigurations: uint8_t,
});
const js_ucharPointer = ref.refType(js_uchar);
const libusb_endpoint_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bEndpointAddress: uint8_t,
  bmAttributes: uint8_t,
  wMaxPacketSize: uint16_t,
  bInterval: uint8_t,
  bRefresh: uint8_t,
  bSynchAddress: uint8_t,
  extra: js_ucharPointer,
  extra_length: js_int32,
});
const libusb_interface_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bInterfaceNumber: uint8_t,
  bAlternateSetting: uint8_t,
  bNumEndpoints: uint8_t,
  bInterfaceClass: uint8_t,
  bInterfaceSubClass: uint8_t,
  bInterfaceProtocol: uint8_t,
  iInterface: uint8_t,
  endpoint: libusb_endpoint_descriptor,
  extra: js_ucharPointer,
  extra_length: js_int32,
});
const libusb_interface = Struct({
  altsetting: libusb_interface_descriptor,
  num_altsetting: js_int32,
});
const libusb_config_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  wTotalLength: uint16_t,
  bNumInterfaces: uint8_t,
  bConfigurationValue: uint8_t,
  iConfiguration: uint8_t,
  bmAttributes: uint8_t,
  MaxPower: uint8_t,
  interface: libusb_interface,
  extra: js_ucharPointer,
  extra_length: js_int32,
});
const libusb_ss_endpoint_companion_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bMaxBurst: uint8_t,
  bmAttributes: uint8_t,
  wBytesPerInterval: uint16_t,
});
const libusb_bos_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  wTotalLength: uint16_t,
  bNumDeviceCaps: uint8_t,
  dev_capability: js_voidPointer,
});
const libusb_bos_dev_capability_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bDevCapabilityType: uint8_t,
  dev_capability_data: js_voidPointer,
});
const libusb_usb_2_0_extension_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bDevCapabilityType: uint8_t,
  bmAttributes: uint32_t,
});
const libusb_ss_usb_device_capability_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bDevCapabilityType: uint8_t,
  bmAttributes: uint8_t,
  wSpeedSupported: uint16_t,
  bFunctionalitySupport: uint8_t,
  bU1DevExitLat: uint8_t,
  bU2DevExitLat: uint16_t,
});
const uint8_t_array_16 = ArrayType(uint8_t, 16);
const libusb_container_id_descriptor = Struct({
  bLength: uint8_t,
  bDescriptorType: uint8_t,
  bDevCapabilityType: uint8_t,
  bReserved: uint8_t,
  ContainerID: uint8_t_array_16,
});
const uint8_tPointer = ref.refType(uint8_t);
const intptr_t = js_long;
const js_ulong = ref.types.ulong;
const size_t = js_ulong;
const libusb_transfer = js_voidPointer;
const __time_t = js_long;
const __suseconds_t = js_long;
const timeval = Struct({
  tv_sec: __time_t,
  tv_usec: __suseconds_t,
});
const js_short = ref.types.short;
const libusb_pollfd = Struct({
  fd: js_int32,
  events: js_short,
});
const libusb_pollfd_added_cb = FFI.Function(ref.types.void, [
  js_int32,
  js_short,
  js_voidPointer,
]);
const libusb_pollfd_removed_cb = FFI.Function(ref.types.void, [
  js_int32,
  js_voidPointer,
]);
const libusb_hotplug_event = js_uint32;
const libusb_hotplug_flag = js_uint32;
const libusb_hotplug_callback_fn = FFI.Function(ref.types.int32, [
  libusb_context,
  libusb_device,
  js_uint32,
  js_voidPointer,
]);
const libusb_hotplug_callback_handle = js_int32;
const libusb_hotplug_callback_handlePointer = ref.refType(
  libusb_hotplug_callback_handle
);

types["__ssize_t"] = __ssize_t;
types["__suseconds_t"] = __suseconds_t;
types["__time_t"] = __time_t;
types["__uint16_t"] = __uint16_t;
types["__uint32_t"] = __uint32_t;
types["__uint8_t"] = __uint8_t;
types["intptr_t"] = intptr_t;
types["js_CString"] = js_CString;
types["js_int32"] = js_int32;
types["js_int32Pointer"] = js_int32Pointer;
types["js_long"] = js_long;
types["js_short"] = js_short;
types["js_uchar"] = js_uchar;
types["js_ucharPointer"] = js_ucharPointer;
types["js_uint32"] = js_uint32;
types["js_ulong"] = js_ulong;
types["js_ushort"] = js_ushort;
types["js_void"] = js_void;
types["js_voidPointer"] = js_voidPointer;
types["libusb_bos_descriptor"] = libusb_bos_descriptor;
types["libusb_bos_dev_capability_descriptor"] =
  libusb_bos_dev_capability_descriptor;
types["libusb_config_descriptor"] = libusb_config_descriptor;
types["libusb_container_id_descriptor"] = libusb_container_id_descriptor;
types["libusb_context"] = libusb_context;
types["libusb_contextPointer"] = libusb_contextPointer;
types["libusb_device"] = libusb_device;
types["libusb_devicePointer"] = libusb_devicePointer;
types["libusb_device_descriptor"] = libusb_device_descriptor;
types["libusb_device_handle"] = libusb_device_handle;
types["libusb_device_handlePointer"] = libusb_device_handlePointer;
types["libusb_endpoint_descriptor"] = libusb_endpoint_descriptor;
types["libusb_hotplug_callback_fn"] = libusb_hotplug_callback_fn;
types["libusb_hotplug_callback_handle"] = libusb_hotplug_callback_handle;
types["libusb_hotplug_callback_handlePointer"] =
  libusb_hotplug_callback_handlePointer;
types["libusb_hotplug_event"] = libusb_hotplug_event;
types["libusb_hotplug_flag"] = libusb_hotplug_flag;
types["libusb_interface"] = libusb_interface;
types["libusb_interface_descriptor"] = libusb_interface_descriptor;
types["libusb_log_cb"] = libusb_log_cb;
types["libusb_pollfd"] = libusb_pollfd;
types["libusb_pollfd_added_cb"] = libusb_pollfd_added_cb;
types["libusb_pollfd_removed_cb"] = libusb_pollfd_removed_cb;
types["libusb_ss_endpoint_companion_descriptor"] =
  libusb_ss_endpoint_companion_descriptor;
types["libusb_ss_usb_device_capability_descriptor"] =
  libusb_ss_usb_device_capability_descriptor;
types["libusb_transfer"] = libusb_transfer;
types["libusb_usb_2_0_extension_descriptor"] =
  libusb_usb_2_0_extension_descriptor;
types["libusb_version"] = libusb_version;
types["size_t"] = size_t;
types["ssize_t"] = ssize_t;
types["timeval"] = timeval;
types["uint16_t"] = uint16_t;
types["uint32_t"] = uint32_t;
types["uint8_t"] = uint8_t;
types["uint8_tPointer"] = uint8_tPointer;
types["uint8_t_array_16"] = uint8_t_array_16;

const functions = new FFI.Library(null, {
  libusb_alloc_streams: [
    js_int32,
    [libusb_device_handlePointer, uint32_t, js_ucharPointer, js_int32],
  ],
  libusb_alloc_transfer: [libusb_transfer, [js_int32]],
  libusb_attach_kernel_driver: [
    js_int32,
    [libusb_device_handlePointer, js_int32],
  ],
  libusb_bulk_transfer: [
    js_int32,
    [
      libusb_device_handlePointer,
      js_uchar,
      js_ucharPointer,
      js_int32,
      js_int32Pointer,
      js_uint32,
    ],
  ],
  libusb_cancel_transfer: [js_int32, [libusb_transfer]],
  libusb_claim_interface: [js_int32, [libusb_device_handlePointer, js_int32]],
  libusb_clear_halt: [js_int32, [libusb_device_handlePointer, js_uchar]],
  libusb_close: [js_void, [libusb_device_handlePointer]],
  libusb_control_transfer: [
    js_int32,
    [
      libusb_device_handlePointer,
      uint8_t,
      uint8_t,
      uint16_t,
      uint16_t,
      js_ucharPointer,
      uint16_t,
      js_uint32,
    ],
  ],
  libusb_detach_kernel_driver: [
    js_int32,
    [libusb_device_handlePointer, js_int32],
  ],
  libusb_dev_mem_alloc: [
    js_ucharPointer,
    [libusb_device_handlePointer, size_t],
  ],
  libusb_dev_mem_free: [
    js_int32,
    [libusb_device_handlePointer, js_ucharPointer, size_t],
  ],
  libusb_error_name: [js_CString, [js_int32]],
  libusb_event_handler_active: [js_int32, [libusb_contextPointer]],
  libusb_event_handling_ok: [js_int32, [libusb_contextPointer]],
  libusb_exit: [js_void, [libusb_contextPointer]],
  libusb_free_bos_descriptor: [js_void, [libusb_bos_descriptor]],
  libusb_free_config_descriptor: [js_void, [libusb_config_descriptor]],
  libusb_free_container_id_descriptor: [
    js_void,
    [libusb_container_id_descriptor],
  ],
  libusb_free_device_list: [js_void, [libusb_devicePointer, js_int32]],
  libusb_free_pollfds: [js_void, [libusb_pollfd]],
  libusb_free_ss_endpoint_companion_descriptor: [
    js_void,
    [libusb_ss_endpoint_companion_descriptor],
  ],
  libusb_free_ss_usb_device_capability_descriptor: [
    js_void,
    [libusb_ss_usb_device_capability_descriptor],
  ],
  libusb_free_streams: [
    js_int32,
    [libusb_device_handlePointer, js_ucharPointer, js_int32],
  ],
  libusb_free_transfer: [js_void, [libusb_transfer]],
  libusb_free_usb_2_0_extension_descriptor: [
    js_void,
    [libusb_usb_2_0_extension_descriptor],
  ],
  libusb_get_active_config_descriptor: [
    js_int32,
    [libusb_devicePointer, libusb_config_descriptor],
  ],
  libusb_get_bos_descriptor: [
    js_int32,
    [libusb_device_handlePointer, libusb_bos_descriptor],
  ],
  libusb_get_bus_number: [uint8_t, [libusb_devicePointer]],
  libusb_get_config_descriptor: [
    js_int32,
    [libusb_devicePointer, uint8_t, libusb_config_descriptor],
  ],
  libusb_get_config_descriptor_by_value: [
    js_int32,
    [libusb_devicePointer, uint8_t, libusb_config_descriptor],
  ],
  libusb_get_configuration: [
    js_int32,
    [libusb_device_handlePointer, js_int32Pointer],
  ],
  libusb_get_container_id_descriptor: [
    js_int32,
    [
      libusb_context,
      libusb_bos_dev_capability_descriptor,
      libusb_container_id_descriptor,
    ],
  ],
  libusb_get_device: [libusb_devicePointer, [libusb_device_handlePointer]],
  libusb_get_device_address: [uint8_t, [libusb_devicePointer]],
  libusb_get_device_descriptor: [
    js_int32,
    [libusb_devicePointer, libusb_device_descriptor],
  ],
  libusb_get_device_list: [
    ssize_t,
    [libusb_contextPointer, libusb_devicePointer],
  ],
  libusb_get_device_speed: [js_int32, [libusb_devicePointer]],
  libusb_get_max_iso_packet_size: [js_int32, [libusb_devicePointer, js_uchar]],
  libusb_get_max_packet_size: [js_int32, [libusb_devicePointer, js_uchar]],
  libusb_get_next_timeout: [js_int32, [libusb_contextPointer, timeval]],
  libusb_get_parent: [libusb_devicePointer, [libusb_devicePointer]],
  libusb_get_pollfds: [libusb_pollfd, [libusb_contextPointer]],
  libusb_get_port_number: [uint8_t, [libusb_devicePointer]],
  libusb_get_port_numbers: [
    js_int32,
    [libusb_devicePointer, uint8_tPointer, js_int32],
  ],
  libusb_get_port_path: [
    js_int32,
    [libusb_contextPointer, libusb_devicePointer, uint8_tPointer, uint8_t],
  ],
  libusb_get_ss_endpoint_companion_descriptor: [
    js_int32,
    [
      libusb_context,
      libusb_endpoint_descriptor,
      libusb_ss_endpoint_companion_descriptor,
    ],
  ],
  libusb_get_ss_usb_device_capability_descriptor: [
    js_int32,
    [
      libusb_context,
      libusb_bos_dev_capability_descriptor,
      libusb_ss_usb_device_capability_descriptor,
    ],
  ],
  libusb_get_string_descriptor_ascii: [
    js_int32,
    [libusb_device_handlePointer, uint8_t, js_ucharPointer, js_int32],
  ],
  libusb_get_usb_2_0_extension_descriptor: [
    js_int32,
    [
      libusb_context,
      libusb_bos_dev_capability_descriptor,
      libusb_usb_2_0_extension_descriptor,
    ],
  ],
  libusb_get_version: [libusb_version, []],
  libusb_handle_events: [js_int32, [libusb_contextPointer]],
  libusb_handle_events_completed: [
    js_int32,
    [libusb_contextPointer, js_int32Pointer],
  ],
  libusb_handle_events_locked: [js_int32, [libusb_contextPointer, timeval]],
  libusb_handle_events_timeout: [js_int32, [libusb_contextPointer, timeval]],
  libusb_handle_events_timeout_completed: [
    js_int32,
    [libusb_contextPointer, timeval, js_int32Pointer],
  ],
  libusb_has_capability: [js_int32, [uint32_t]],
  libusb_hotplug_deregister_callback: [
    js_void,
    [libusb_contextPointer, libusb_hotplug_callback_handle],
  ],
  libusb_hotplug_register_callback: [
    js_int32,
    [
      libusb_contextPointer,
      libusb_hotplug_event,
      libusb_hotplug_flag,
      js_int32,
      js_int32,
      js_int32,
      libusb_hotplug_callback_fn,
      js_voidPointer,
      libusb_hotplug_callback_handlePointer,
    ],
  ],
  libusb_init: [js_int32, [libusb_contextPointer]],
  libusb_interrupt_event_handler: [js_void, [libusb_contextPointer]],
  libusb_interrupt_transfer: [
    js_int32,
    [
      libusb_device_handlePointer,
      js_uchar,
      js_ucharPointer,
      js_int32,
      js_int32Pointer,
      js_uint32,
    ],
  ],
  libusb_kernel_driver_active: [
    js_int32,
    [libusb_device_handlePointer, js_int32],
  ],
  libusb_lock_event_waiters: [js_void, [libusb_contextPointer]],
  libusb_lock_events: [js_void, [libusb_contextPointer]],
  libusb_open: [js_int32, [libusb_devicePointer, libusb_device_handlePointer]],
  libusb_open_device_with_vid_pid: [
    libusb_device_handlePointer,
    [libusb_contextPointer, uint16_t, uint16_t],
  ],
  libusb_pollfds_handle_timeouts: [js_int32, [libusb_contextPointer]],
  libusb_ref_device: [libusb_devicePointer, [libusb_devicePointer]],
  libusb_release_interface: [js_int32, [libusb_device_handlePointer, js_int32]],
  libusb_reset_device: [js_int32, [libusb_device_handlePointer]],
  libusb_set_auto_detach_kernel_driver: [
    js_int32,
    [libusb_device_handlePointer, js_int32],
  ],
  libusb_set_configuration: [js_int32, [libusb_device_handlePointer, js_int32]],
  libusb_set_debug: [js_void, [libusb_contextPointer, js_int32]],
  libusb_set_interface_alt_setting: [
    js_int32,
    [libusb_device_handlePointer, js_int32, js_int32],
  ],
  libusb_set_log_cb: [
    js_void,
    [libusb_contextPointer, libusb_log_cb, js_int32],
  ],
  libusb_set_option: [js_int32, [libusb_contextPointer, js_uint32]],
  libusb_set_pollfd_notifiers: [
    js_void,
    [
      libusb_contextPointer,
      libusb_pollfd_added_cb,
      libusb_pollfd_removed_cb,
      js_voidPointer,
    ],
  ],
  libusb_setlocale: [js_int32, [js_CString]],
  libusb_strerror: [js_CString, [js_int32]],
  libusb_submit_transfer: [js_int32, [libusb_transfer]],
  libusb_transfer_get_stream_id: [uint32_t, [libusb_transfer]],
  libusb_transfer_set_stream_id: [js_void, [libusb_transfer, uint32_t]],
  libusb_try_lock_events: [js_int32, [libusb_contextPointer]],
  libusb_unlock_event_waiters: [js_void, [libusb_contextPointer]],
  libusb_unlock_events: [js_void, [libusb_contextPointer]],
  libusb_unref_device: [js_void, [libusb_devicePointer]],
  libusb_wait_for_event: [js_int32, [libusb_contextPointer, timeval]],
  libusb_wrap_sys_device: [
    js_int32,
    [libusb_contextPointer, intptr_t, libusb_device_handlePointer],
  ],
});

module.exports = {
  constants,
  types,
  functions,
};
