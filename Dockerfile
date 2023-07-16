FROM ubuntu:latest
LABEL authors="gideon"

ENTRYPOINT ["top", "-b"]