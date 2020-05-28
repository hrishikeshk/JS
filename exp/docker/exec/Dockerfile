FROM openjdk
WORKDIR /home/hrishikesh/work/github/JS/exp/docker/exec
COPY log4j-api-2.13.3.jar .
COPY log4j-core-2.13.3.jar .
COPY . .
RUN java -Dfile.encoding=UTF-8 -classpath log4j-api-2.13.3.jar:log4j-core-2.13.3.jar:. LoggerTest
