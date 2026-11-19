// Q5: Boolean Logic Access System
function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // "door closed" is taken as door locked
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

checkAccess(true, true, true, true);   // Secure
checkAccess(false, true, true, true);  // Unsafe (door not locked)
checkAccess(true, false, true, true);  // Unsafe (window open)
checkAccess(true, true, false, true);  // Unsafe (alarm off)
checkAccess(true, true, true, false);  // Unsafe (owner not inside)
