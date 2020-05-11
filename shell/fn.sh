#!/usr/bin/env bash
# fn.sh

#function log_msg{
  #echo "[`date '+ %F %T'` ]: $@"
  #echo "[`date`+%F %T]: $@"
#}
#log_msg "this is sample log message"

function log_msg {
  echo "[`date '+ %F %T'` ]: $@"
}
log_msg "this is sample log message"