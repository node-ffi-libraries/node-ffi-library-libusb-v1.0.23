var FFI = require("ffi-napi"),
  ref = require("ref-napi"),
  ArrayType = require("ref-array-di")(ref),
  Struct = require("ref-struct-di")(ref),
  Union = require("ref-union-di")(ref);

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
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
  "": {
    LIBUSB_HOTPLUG_EVENT_DEVICE_ARRIVED: 1,
    LIBUSB_HOTPLUG_EVENT_DEVICE_LEFT: 2,
    LIBUSB_HOTPLUG_NO_FLAGS: 0,
    LIBUSB_HOTPLUG_ENUMERATE: 1,
    1: "LIBUSB_HOTPLUG_EVENT_DEVICE_ARRIVED",
    2: "LIBUSB_HOTPLUG_EVENT_DEVICE_LEFT",
    0: "LIBUSB_HOTPLUG_NO_FLAGS",
    1: "LIBUSB_HOTPLUG_ENUMERATE",
  },
  libusb_option: {
    LIBUSB_OPTION_LOG_LEVEL: 0,
    LIBUSB_OPTION_USE_USBDK: 1,
    0: "LIBUSB_OPTION_LOG_LEVEL",
    1: "LIBUSB_OPTION_USE_USBDK",
  },
};

var libusb_context = (exports.libusb_context = voidPtr);
var libusb_contextPtr = (exports.libusb_contextPtr = ref.refType(
  libusb_context
));
var libusb_log_cb = (exports.libusb_log_cb = FFI.Function(ref.types.void, [
  voidPtr,
  ref.types.uint32,
  ref.types.CString,
]));
var libusb_log_cbPtr = (exports.libusb_log_cbPtr = ref.refType(libusb_log_cb));
var libusb_device = (exports.libusb_device = voidPtr);
var libusb_devicePtr = (exports.libusb_devicePtr = ref.refType(libusb_device));
var libusb_device_handle = (exports.libusb_device_handle = voidPtr);
var libusb_device_handlePtr = (exports.libusb_device_handlePtr = ref.refType(
  libusb_device_handle
));
var uint8_t = (exports.uint8_t = Struct({
  __uint8_t: ref.types.uchar,
}));
var uint8_tPtr = (exports.uint8_tPtr = ref.refType(uint8_t));
var libusb_pollfd_added_cb = (exports.libusb_pollfd_added_cb = FFI.Function(
  ref.types.void,
  [ref.types.int32, ref.types.short, voidPtr]
));
var libusb_pollfd_added_cbPtr = (exports.libusb_pollfd_added_cbPtr = ref.refType(
  libusb_pollfd_added_cb
));
var libusb_pollfd_removed_cb = (exports.libusb_pollfd_removed_cb = FFI.Function(
  ref.types.void,
  [ref.types.int32, voidPtr]
));
var libusb_pollfd_removed_cbPtr = (exports.libusb_pollfd_removed_cbPtr = ref.refType(
  libusb_pollfd_removed_cb
));
var libusb_hotplug_callback_fn = (exports.libusb_hotplug_callback_fn = FFI.Function(
  ref.types.int32,
  [voidPtr, voidPtr, ref.types.uint32, voidPtr]
));
var libusb_hotplug_callback_fnPtr = (exports.libusb_hotplug_callback_fnPtr = ref.refType(
  libusb_hotplug_callback_fn
));
var libusb_hotplug_callback_handle = (exports.libusb_hotplug_callback_handle = voidPtr);
var libusb_hotplug_callback_handlePtr = (exports.libusb_hotplug_callback_handlePtr = ref.refType(
  libusb_hotplug_callback_handle
));

exports.functions = new FFI.Library(null, {
  libusb_init: [ref.types.int32, [voidPtr]],
  libusb_exit: [ref.types.void, [libusb_context]],
  libusb_set_debug: [ref.types.void, [libusb_contextPtr, ref.types.int32]],
  libusb_set_log_cb: [
    ref.types.void,
    [libusb_contextPtr, libusb_log_cb, ref.types.int32],
  ],
  libusb_get_version: [voidPtr, []],
  libusb_has_capability: [ref.types.int32, [ref.types.uint32]],
  libusb_error_name: [ref.types.CString, [ref.types.int32]],
  libusb_setlocale: [ref.types.int32, [ref.types.CString]],
  libusb_strerror: [ref.types.CString, [ref.types.int32]],
  libusb_get_device_list: [ref.types.long, [libusb_contextPtr, voidPtr]],
  libusb_free_device_list: [ref.types.void, [voidPtr, ref.types.int32]],
  libusb_ref_device: [libusb_device, [libusb_devicePtr]],
  libusb_unref_device: [ref.types.void, [libusb_devicePtr]],
  libusb_get_configuration: [
    ref.types.int32,
    [libusb_device_handle, ref.refType(ref.types.int32)],
  ],
  libusb_get_device_descriptor: [ref.types.int32, [libusb_devicePtr, voidPtr]],
  libusb_get_active_config_descriptor: [
    ref.types.int32,
    [libusb_devicePtr, voidPtr],
  ],
  libusb_get_config_descriptor: [
    ref.types.int32,
    [libusb_devicePtr, ref.types.uchar, voidPtr],
  ],
  libusb_get_config_descriptor_by_value: [
    ref.types.int32,
    [libusb_devicePtr, ref.types.uchar, voidPtr],
  ],
  libusb_free_config_descriptor: [ref.types.void, [voidPtr]],
  libusb_get_ss_endpoint_companion_descriptor: [
    ref.types.int32,
    [voidPtr, voidPtr, voidPtr],
  ],
  libusb_free_ss_endpoint_companion_descriptor: [ref.types.void, [voidPtr]],
  libusb_get_bos_descriptor: [
    ref.types.int32,
    [libusb_device_handlePtr, voidPtr],
  ],
  libusb_free_bos_descriptor: [ref.types.void, [voidPtr]],
  libusb_get_usb_2_0_extension_descriptor: [
    ref.types.int32,
    [voidPtr, voidPtr, voidPtr],
  ],
  libusb_free_usb_2_0_extension_descriptor: [ref.types.void, [voidPtr]],
  libusb_get_ss_usb_device_capability_descriptor: [
    ref.types.int32,
    [voidPtr, voidPtr, voidPtr],
  ],
  libusb_free_ss_usb_device_capability_descriptor: [ref.types.void, [voidPtr]],
  libusb_get_container_id_descriptor: [
    ref.types.int32,
    [voidPtr, voidPtr, voidPtr],
  ],
  libusb_free_container_id_descriptor: [ref.types.void, [voidPtr]],
  libusb_get_bus_number: [ref.types.uchar, [libusb_devicePtr]],
  libusb_get_port_number: [ref.types.uchar, [libusb_devicePtr]],
  libusb_get_port_numbers: [
    ref.types.int32,
    [libusb_devicePtr, uint8_tPtr, ref.types.int32],
  ],
  libusb_get_port_path: [
    ref.types.int32,
    [libusb_contextPtr, libusb_devicePtr, uint8_tPtr, ref.types.uchar],
  ],
  libusb_get_parent: [libusb_devicePtr, [libusb_devicePtr]],
  libusb_get_device_address: [ref.types.uchar, [libusb_devicePtr]],
  libusb_get_device_speed: [ref.types.int32, [libusb_devicePtr]],
  libusb_get_max_packet_size: [
    ref.types.int32,
    [libusb_devicePtr, ref.types.uchar],
  ],
  libusb_get_max_iso_packet_size: [
    ref.types.int32,
    [libusb_devicePtr, ref.types.uchar],
  ],
  libusb_wrap_sys_device: [
    ref.types.int32,
    [libusb_contextPtr, ref.types.long, voidPtr],
  ],
  libusb_open: [ref.types.int32, [libusb_devicePtr, voidPtr]],
  libusb_close: [ref.types.void, [libusb_device_handlePtr]],
  libusb_get_device: [libusb_devicePtr, [libusb_device_handlePtr]],
  libusb_set_configuration: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_claim_interface: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_release_interface: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_open_device_with_vid_pid: [
    libusb_device_handlePtr,
    [libusb_contextPtr, ref.types.ushort, ref.types.ushort],
  ],
  libusb_set_interface_alt_setting: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32, ref.types.int32],
  ],
  libusb_clear_halt: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.uchar],
  ],
  libusb_reset_device: [ref.types.int32, [libusb_device_handlePtr]],
  libusb_alloc_streams: [
    ref.types.int32,
    [
      libusb_device_handlePtr,
      ref.types.uint32,
      ref.refType(ref.types.uchar),
      ref.types.int32,
    ],
  ],
  libusb_free_streams: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.refType(ref.types.uchar), ref.types.int32],
  ],
  libusb_dev_mem_alloc: [
    ref.refType(ref.types.uchar),
    [libusb_device_handlePtr, ref.types.ulong],
  ],
  libusb_dev_mem_free: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.refType(ref.types.uchar), ref.types.ulong],
  ],
  libusb_kernel_driver_active: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_detach_kernel_driver: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_attach_kernel_driver: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_set_auto_detach_kernel_driver: [
    ref.types.int32,
    [libusb_device_handlePtr, ref.types.int32],
  ],
  libusb_alloc_transfer: [voidPtr, [ref.types.int32]],
  libusb_submit_transfer: [ref.types.int32, [voidPtr]],
  libusb_cancel_transfer: [ref.types.int32, [voidPtr]],
  libusb_free_transfer: [ref.types.void, [voidPtr]],
  libusb_transfer_set_stream_id: [ref.types.void, [voidPtr, ref.types.uint32]],
  libusb_transfer_get_stream_id: [ref.types.uint32, [voidPtr]],
  libusb_control_transfer: [
    ref.types.int32,
    [
      libusb_device_handlePtr,
      ref.types.uchar,
      ref.types.uchar,
      ref.types.ushort,
      ref.types.ushort,
      ref.refType(ref.types.uchar),
      ref.types.ushort,
      ref.types.uint32,
    ],
  ],
  libusb_bulk_transfer: [
    ref.types.int32,
    [
      libusb_device_handlePtr,
      ref.types.uchar,
      ref.refType(ref.types.uchar),
      ref.types.int32,
      ref.refType(ref.types.int32),
      ref.types.uint32,
    ],
  ],
  libusb_interrupt_transfer: [
    ref.types.int32,
    [
      libusb_device_handlePtr,
      ref.types.uchar,
      ref.refType(ref.types.uchar),
      ref.types.int32,
      ref.refType(ref.types.int32),
      ref.types.uint32,
    ],
  ],
  libusb_get_string_descriptor_ascii: [
    ref.types.int32,
    [
      libusb_device_handlePtr,
      ref.types.uchar,
      ref.refType(ref.types.uchar),
      ref.types.int32,
    ],
  ],
  libusb_try_lock_events: [ref.types.int32, [libusb_contextPtr]],
  libusb_lock_events: [ref.types.void, [libusb_contextPtr]],
  libusb_unlock_events: [ref.types.void, [libusb_contextPtr]],
  libusb_event_handling_ok: [ref.types.int32, [libusb_contextPtr]],
  libusb_event_handler_active: [ref.types.int32, [libusb_contextPtr]],
  libusb_interrupt_event_handler: [ref.types.void, [libusb_contextPtr]],
  libusb_lock_event_waiters: [ref.types.void, [libusb_contextPtr]],
  libusb_unlock_event_waiters: [ref.types.void, [libusb_contextPtr]],
  libusb_wait_for_event: [ref.types.int32, [libusb_contextPtr, voidPtr]],
  libusb_handle_events_timeout: [ref.types.int32, [libusb_contextPtr, voidPtr]],
  libusb_handle_events_timeout_completed: [
    ref.types.int32,
    [libusb_contextPtr, voidPtr, ref.refType(ref.types.int32)],
  ],
  libusb_handle_events: [ref.types.int32, [libusb_contextPtr]],
  libusb_handle_events_completed: [
    ref.types.int32,
    [libusb_contextPtr, ref.refType(ref.types.int32)],
  ],
  libusb_handle_events_locked: [ref.types.int32, [libusb_contextPtr, voidPtr]],
  libusb_pollfds_handle_timeouts: [ref.types.int32, [libusb_contextPtr]],
  libusb_get_next_timeout: [ref.types.int32, [libusb_contextPtr, voidPtr]],
  libusb_get_pollfds: [voidPtr, [libusb_contextPtr]],
  libusb_free_pollfds: [ref.types.void, [voidPtr]],
  libusb_set_pollfd_notifiers: [
    ref.types.void,
    [
      libusb_contextPtr,
      libusb_pollfd_added_cb,
      libusb_pollfd_removed_cb,
      voidPtr,
    ],
  ],
  libusb_hotplug_register_callback: [
    ref.types.int32,
    [
      libusb_contextPtr,
      ref.types.uint32,
      ref.types.uint32,
      ref.types.int32,
      ref.types.int32,
      ref.types.int32,
      libusb_hotplug_callback_fn,
      voidPtr,
      libusb_hotplug_callback_handle,
    ],
  ],
  libusb_hotplug_deregister_callback: [
    ref.types.void,
    [libusb_contextPtr, ref.types.int32],
  ],
  libusb_set_option: [ref.types.int32, [libusb_contextPtr, ref.types.uint32]],
});
