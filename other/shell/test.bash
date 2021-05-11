#!/bin/bash
echo "starting program at $(date)"
echo "Running program $0 with $# arguments with pid $$"

for file in $@; do
  grep foobar $file > /dev/null 2> /dev/null
  if[[]]