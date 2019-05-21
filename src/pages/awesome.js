import React, { Component } from 'react'
import Layout from "../components/layout";
import './main.css';

class Architect extends React.Component {
  render() {
    return (
      <Layout>
        <section class="section">
          <div class="container">
            <div className="content">
              <h1 id="awesomecassandraawesomehttpscdnrawgitcomsindresorhusawesomed7305f38d29fed78fa85652e3a63e154dd8e8829mediabadgesvghttpsgithubcomsindresorhusawesome">Awesome Cassandra <a href="https://github.com/sindresorhus/awesome"><img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" alt="Awesome" /></a></h1>

                <p>A curated list of awesome <a href="http://cassandra.apache.org/">Apache Cassandra</a> packages and resources. Maintained by Rahul Singh of <a href="http://anant.us">Anant</a>. Feel free contact me if you'd like to collaborate on this and other awesome lists. <a href="https://github.com/Anant/awesome-cassandra">Awesome Cassandra</a> , <a href="https://github.com/Anant/awesome-solr">Awesome Solr</a>, <a href="https://github.com/Anant/awesome-lucene">Awesome Lucene</a></p>

                <h2 id="contents">Contents</h2>

                <ul>
                <li>
                <p><a href="#general">General</a></p>
                </li>
                <li>
                <p><a href="#packages">Packages</a></p>
                <ul>
                <li><a href="#interfaces">Libraries</a> - Programming Language Specific Libs for Cassandra.</li>
                <li><a href="#tools">Tools</a> - Applications / Tools that work with Cassandra.</li>
                <li><a href="#projects">Projects</a> - Other projects that use Cassandra.</li>
                </ul>
                </li>
                <li>
                <p><a href="#resources">Resources</a></p>
                <ul>
                <li><a href="#documentation">Documentation</a> - Official / unofficial documentation.</li>
                <li><a href="#books">Books</a> - Popular books about Cassandra.</li>
                <li><a href="#tutorials">Tutorials</a> - Step by step tutorials on Cassandra.</li>
                <li><a href="#web-sites">Web Sites</a> - Sites ( not blogs ) on Cassandra.</li>
                <li><a href="#blogs">Blogs</a> - from Cassandra experts.</li>
                <li><a href="#videos">Videos</a> - Videos on Cassandra.</li>
                <li><a href="#slides">Slides</a> - Slides on Cassandra / related technologies.</li>
                </ul>
                </li>
                </ul>
                <h2><a id="general"></a>General</h2>
                <h3><a id="Cassandra"></a>Cassandra</h3>
                <ul>
                <li><a href="http://cassandra.apache.org/">Apache Cassandra</a> - Manage massive amounts of data, fast, without losing sleep.</li>
                </ul>
                <h3><a id="Cassandra_History_21"></a>Cassandra History</h3>
                <ul>
                <li><a href="https://www.idgconnect.com/abstract/30973/apache-cassandra">IDG: 10 Years of Apache Cassandra</a></li>
                <li><a href="https://www.zdnet.com/article/apache-cassandra-turns-10/">ZDNet: Apache Cassandra Turns 10</a></li>
                </ul>
                <h3><a id="Cassandra_Use_Cases_25"></a>Cassandra Use Cases</h3>
                <ul>
                <li><a href="https://academy.datastax.com/resources/brief-introduction-apache-cassandra">Datastax Academy: Brief Introduction to Apache Cassandra</a></li>
                <li><a href="https://github.com/pyroalf/kaa-cassandra-sample">Kaa application based on Raspberry Pi and DHT11 sensor</a> - Cassandra IoT usecase with Raspberry Pi and a DHT11 Sensor</li>
                <li><a href="https://github.com/bradtraversy/mysubscribers">Simple NodeJS Express 4 Cassandra Application</a> - MySubscribers is a very simple application (Start of an application) which allows you to create, read, update and delete users/subscribers. This application was only created to aid the YouTube course</li>
                <li><a href="http://hadoopmag.com/an-odyssey-of-cassandra/">An Odyssey of Cassandra</a> - This is an old article republished but talks about transitioning from SQL to NoSQL with Cassandra.</li>
                </ul>
                <h3><a id="Cassandra_Distributions_31"></a>Cassandra Distributions</h3>
                <ul>
                <li><a href="https://www.datastax.com/">Datastax Enterrpise</a> - Most widely used commercial distribution of Apache Cassandra, integrated with Apache Spark (for SparkSQL, analytics), Apache Solr (for secondary index), Apache TinkerPop based Graph stored in Cassandra, and OpsCenter.</li>
                <li><a href="https://www.datastax.com/products/datastax-distribution-of-apache-cassandra">DDACS</a> - Datastax Distribution of Apache Cassandra, a production ready distribution with a bulk loader supported by Datastax.</li>
                <li><a href="http://www.elassandra.io/">Elassandra</a> - Elassandra = Elasticsearch as a Cassandra secondary index.</li>
                <li><a href="https://github.com/scylladb/scylla">ScyllaDB</a> - NoSQL data store using the seastar framework, compatible with Apache Cassandra</li>
                <li><a href="https://github.com/YugaByte/yugabyte-db">YugaByte Database</a> - YugaByteDB is a transactional, high-performance database for building distributed cloud services. It supports Cassandra-compatible and Redis-compatible APIs, with PostgreSQL in Beta.</li>
                <li><a href="https://docs.microsoft.com/en-us/azure/cosmos-db/cassandra-introduction">Microsoft Azure Cosmos DB: Apache Cassandra API</a> - Azure Cosmos DB provides the Cassandra API (preview) for applications that are written for Apache Cassandra that need premium capabilities.</li>
                </ul>
                <h3><a id="Using_Cassandra_39"></a>Using Cassandra</h3>
            

                <ul>
                <li><a href="https://tobert.github.io/post/2014-07-15-installing-cassandra-spark-stack.html">Installing the Cassandra / Spark OSS Stack</a></li>

                <li><a href="http://tobert.github.io/post/2014-07-15-installing-cassandra-spark-stack.html">Install Cassandra and Spark</a> - Quick user guide for integration with Cassandra and Spark</li>

                <li><a href="http://cassandra.apache.org/doc/latest/cql/">The Cassandra Query Language</a></li>

                <li><a href="http://thelastpickle.com/blog/2017/03/07/The-limit-clause-in-cassandra-might-not-work-as-you-think.html">tghe LIMIT Clause in Apache Cassandra might not work as you think</a></li>

                <li><a href="https://getstream.io/blog/building-a-performant-api-using-go-and-cassandra/">Building a Performant API using Go and Cassandra</a></li>

                <li><a href="https://github.com/wildengineer/cassandra-data-copy-tool">Cassandra Data Copy Tool</a>- Java tool to copy data from one cassandra table to another</li>

                <li><a href="https://github.com/jxblum/spring-data-cassandra-examples">Spring Data Cassandra Examples</a> - Examples for the Spring Data Cassandra Project.</li>

                <li><a href="http://rustyrazorblade.com/post/2015/2015-01-02-intro-to-spark-and-cassandra/">Introduction to Spark &amp; Cassandra</a></li>

                <li><a href="https://objectpartners.com/2016/11/30/from-cassandra-to-s3-with-spark/">From Cassandra to S3, with Spark</a></li>

                <li><a href="https://github.com/markthebault/importCSVSparkCassandra">Import CSV files with spark</a> - How to import a file from S3 into cassandra using spark</li>

                <li><a href="https://hackernoon.com/using-apache-cassandra-a-few-things-before-you-start-ac599926e4b8">Using Apache Cassandra — A few things before you start</a> - Great advice to read before diving deep into Cassandra. </li>

                <li><a href="https://towardsdatascience.com/top-5-reasons-to-use-the-apache-cassandra-database-d541c6448557">Top 5 reasons to use the Apache Cassandra Database</a> - Few good reasons why you'd want to consider Apache Cassandra. </li>
                </ul>

                

                <h3 id="cassandrafromrelational">Cassandra from Relational</h3>

                <ul>
                <li><a href="http://www.datastax.com/relational-database-to-nosql">RDBMS to NoSQL</a>: Your roadmap to understanding whether NoSQL is right for you.</li>

                <li><a href="http://planetcassandra.org/mysql-to-cassandra-migration/">MySQL to C*</a>: mysql to cassandra migration guide</li>

                <li><a href="https://mcbguru.blog/2014/02/27/real-time-replication-from-mysql-to-cassandra/">Real-Time Replication from MySQL to Cassandra</a></li>

                <li><a href="https://medium.com/@jochasinga/cassandra-schemas-for-beginners-like-me-9714cee9236a">Cassandra Schemas for Beginners (like me)</a> - Great article for new developers to Cassandra.</li>

                <li><a href="https://blog.rdx.com/cassandra-and-relational-database-schema-comparison-query-vs-relationship-modeling/">Cassandra and Relational database schema comparison – Query vs relationship modeling</a> </li>

                <li><a href="https://medium.com/@alexbmeng/cassandra-query-language-cql-vs-sql-7f6ed7706b4c">Cassandra Query Language: CQL vs SQL</a> </li>
                </ul>

                <h3 id="cassandradatamodeling">Cassandra Data Modeling</h3>

                <ul>
                <li><a href="http://www.datastax.com/dev/blog/basic-rules-of-cassandra-data-modeling">Basic Rules Of Cassandra Data Modeling</a>: Picking the right data model is the hardest part of using Cassandra. If you have a relational background, CQL will look familiar, but the way you use it can be very different.</li>

                <li><a href="https://medium.com/@alexbmeng/cassandra-query-language-cql-vs-sql-7f6ed7706b4c">Cassandra Query Language : CQL vs. SQL</a></li>

                <li><a href="https://www.slideshare.net/aploetz/cql-this-is-not-the-sql-you-are-loooking-for">CQL: This is not the SQL you are Looking For</a></li>

                <li><a href="https://www.datastax.com/dev/blog/a-deep-look-to-the-cql-where-clause">A Deep Look at the CQL Where Clause</a></li>

                <li><a href="https://github.com/pmcfadin/killrvideo-sample-schema">killrvideo-sample-schema</a> - Sample Cassandra CQL Schema for a Youtube clone.</li>

                <li><a href="https://github.com/jxblum/spring-data-cassandra-examples/blob/master/src/main/resources/cassandra-example-schema.cql">Spring Data Cassandra Examples</a></li>

                <li><a href="https://blog.anant.us/common-problems-cassandra-data-models/">Common Problems in Cassandra Data Models</a> - Presentation and Article on wide partions, tombstones, and data skew.</li>

                <li><a href="http://thelastpickle.com/blog/2017/08/02/time-series-data-modeling-massive-scale.html">Casandra Time Series Data Modeling for Massive Scale</a></li>

                <li><a href="https://miguelperez.xyz/blog/2017/2/13/cassandra-data-modeling-notes">Cassandra Data Modeling Notes</a> - Simple notes on how to estimate the size of your cluster. </li>
                </ul>

                

                <h3 id="cassandraarchitecture">Cassandra Architecture</h3>

                <ul>
                <li><a href="https://www.linkedin.com/pulse/gossip-protocol-inside-apache-cassandra-soham-saha">The Gossip Protocol - Inside Apache Cassandra.</a> - Good visual explanation of how Cassandra keeps consistent. </li>

                <li><a href="http://thelastpickle.com/blog/2016/03/04/introductiont-to-the-apache-cassandra-3-storage-engine.html">Introduction To The Apache Cassandra 3.x Storage Engine</a> - The 3.x storage engine makes it easier for Cassandra to get bytes off disk.</li>

                <li><a href="http://thelastpickle.com/blog/2016/02/18/dropping-columns.html">Dropping columns in Apache Cassandra 3.0</a></li>

                <li><a href="http://thelastpickle.com/blog/2018/03/21/hinted-handoff-gc-grace-demystified.html">Hinted Handoff and GC Grace Demystified</a> - Tuning the balance between GC Grace and Hinted Handoff.</li>

                <li><a href="http://thelastpickle.com/blog/2011/05/15/Deletes-and-Tombstones.html">Deletes an Tombstones</a> - Explains how deletes create tombstones in Cassandra and what they are. </li>

                <li><a href="http://thelastpickle.com/blog/2016/07/27/about-deletes-and-tombstones.html">About Deletes and Tombstones in Cassandra</a> - Deleting distributed and replicated data from a system such as Apache Cassandra is far trickier than in a relational database.</li>

                <li><a href="http://thelastpickle.com/blog/2016/09/15/Null-bindings-on-prepared-statements-and-undesired-tombstone-creation.html">Null bindings on prepared statements and undesired tombstone creation</a> - Good follow up to the last article on Tombstones.</li>

                <li><a href="http://thelastpickle.com/blog/2018/07/05/undetectable-tombstones-in-apache-cassandra.html">Undetecetable tombstones in Apache Cassandra</a> - Indepth analysis of cell and range tombstones. </li>

                <li><a href="https://opencredo.com/cassandra-tombstones-common-issues/">Common Problems with Cassandra Tombstones</a> - "Large Number of Tombstones Causes Latency and Heap Pressure"</li>

                <li><a href="https://medium.com/cassandra-tombstones-clearing-use-case/the-curios-case-of-tombstones-d897f681a378">Curious Case of Tombstones</a> -  How someone dealt with tombstone issues and reclaimed space in their cluster.</li>

                <li><a href="http://thelastpickle.com/blog/2017/03/16/compaction-nuance.html">Understanding the Nuance of Compaction in Apache Cassandra</a> - Overview of how Cassandra manages data on disk.</li>

                <li><a href="https://blog.pythian.com/guide-to-cassandra-thread-pools/">Guide to Cassandra Thread Pools</a> - This guide provides a description of the different thread pools and how to monitor them. Includes what to alert on, common issues and solutions. Old but very useful reference. </li>

                <li><a href="https://miguelperez.xyz/blog/2017/2/13/cassandra-architecture-and-operation">Cassandra Architecture and Operations</a> - A high level overview in one page of how Cassandra works. </li>
                </ul>

                <h3 id="cassandramonitoring">Cassandra Monitoring</h3>

                <ul>
                <li><a href="https://blog.anant.us/resources-for-monitoring-datastax-cassandra-spark-solr-performance/">Resources for Monitoring Datastax, Cassandra, Spark, &amp; Solr Performance</a></li>

                <li><a href="https://www.datadoghq.com/blog/how-to-monitor-cassandra-performance-metrics/">How to Monitor Cassandra</a>: A guide to help you monitor Cassandra performance and work metrics regardles of which monitoring tool you choose to use.</li>

                <li><a href="https://medium.com/@mlowicki/cassandra-metrics-and-their-use-in-grafana-1f0dc33f9cca">Cassandra metrics and their use in Grafana</a></li>

                <li><a href="https://www.robustperception.io/monitoring-cassandra-with-prometheus">Monitoring Cassandra with Prometheus</a></li>

                <li><a href="https://blog.pythian.com/monitoring-cassandra-grafana-influx-db/">Monitoring Cassandra With Grafana And Influx DB</a></li>

                <li><a href="https://softwaremill.com/cassandra-monitoring-part-1/">Cassandra Monitoring - Introduction (1/2)</a></li>

                <li><a href="https://softwaremill.com/cassandra-monitoring-part-2/">Cassandra Monitoring - Graphite/InfluxDB &amp; Grafana on Docker (1/2)</a></li>

                <li><a href="http://thelastpickle.com/blog/2017/04/13/monitoring-cassandra-using-intel-snap.html">Monitoring Cassandra using Intel Snap and Grafana</a> - This blog post describes how to monitor Apache Cassandra using the Intel Snap open source telemetry framework.</li>
                </ul>

                

                <h3 id="cassandramaintenance">Cassandra Maintenance</h3>

                <ul>
                <li><a href="http://thelastpickle.com/blog/2016/03/21/running-commands-cluster-wide.html">Running commands cluster-wide without any management tool</a> - Some tips and tricks to do basic Cluster operations without tools like Chef, Ansible, or Salt.</li>

                <li><a href="http://thelastpickle.com/blog/2017/08/14/limiting-nodetool-parallel-threads.html">Limiting Nodetool Parallel Threads</a> - Little known tool to do nodetool operations with less resources.</li>

                <li><a href="http://thelastpickle.com/blog/2017/05/23/auto-bootstrapping-part1.html">Bootstrapping Cassandra Nodes</a> - Indepth article on how to add nodes to a running Cassandra cluster.</li>

                <li><a href="http://thelastpickle.com/blog/2018/02/21/replace-node-without-bootstrapping.html">Node Replacement without Bootstrapping</a> - How to avoid the long bootstrapping process.</li>

                <li><a href="http://thelastpickle.com/blog/2018/04/03/cassandra-backup-and-restore-aws-ebs.html">Cassandra Backup and Restore - Backup in AWS using EBS Volumes</a> - Indepth article about Backup and recovery in AWS.</li>

                <li><a href="https://blog.pythian.com/backup-strategies-cassandra/">Backup Strategies for Cassandra</a> - Good comparison of different backup and restoration strategies for Cassandra. </li>

                <li><a href="https://github.com/instaclustr/cassandra-backup">Cassandra backup util</a> - https://github.com/instaclustr/cassandra-backup</li>

                <li><a href="https://github.com/tolbertam/sstable-tools">sstable tools</a> - A toolkit for parsing, creating and doing other fun stuff with Cassandra 3.x SSTables.</li>

                <li><a href="https://github.com/instaclustr/cassandra-sstable-tools">cassandra-sstable-tools</a> - Tools for working with sstables</li>
                </ul>

                

                <h3 id="cassandraperformancetuning">Cassandra Performance Tuning</h3>

                <ul>
                <li><a href="http://rustyrazorblade.com/2014/09/cassandra-summit-recap-diagnosing-problems-in-production/">Jon Haddad: Cassandra Summit Recap - Diagnosing Problems in Production</a></li>

                <li><a href="https://academy.datastax.com/support-blog/deeper-dive-diagnosing-dse-performance-issues-ttop-and-multidump">A Deeper Dive - Diagnosing DSE Performance Issues with Ttop and Multidump</a> - A good review of how to look deeper into Cassandra threads. </li>

                <li><a href="https://medium.com/@foundev/my-cassandra-diagnostics-checklist-brain-dump-599a2b95b118">Ryan Svihla's Cassandra 2.0 checklist</a></li>

                <li><a href="https://tobert.github.io/pages/als-cassandra-21-tuning-guide.html">Amy's Cassandra 2.1 tuning guide</a></li>

                <li><a href="http://blog.ragozin.info/2012/03/secret-hotspot-option-improving-gc.html">Secret HotSpot option improving GC pauses on large heaps</a></li>

                <li><a href="https://docs.datastax.com/en/dse/5.1/dse-admin/datastax_enterprise/operations/opsTuneJVM.html">DSE 5.1: Tuning Java Resource</a></li>

                <li><a href="http://thelastpickle.com/blog/2018/01/16/cassandra-flame-graphs.html">Analyzing Cassandra Performance with Flame Graphs</a> - Visually examining Cassandra performance visually using Flamegraphs. </li>

                <li><a href="http://thelastpickle.com/blog/2018/04/11/gc-tuning.html">Garbage Collection Tuning for Cassandra</a> - Optimizing garbage collection for better performance.</li>

                <li><a href="https://github.com/smartcat-labs/cassandra-diagnostics">Cassandra Node Diagnostics Tools</a> - Monitoring and audit power kit for Apache Cassandra.</li>

                <li><a href="http://thelastpickle.com/blog/2016/12/08/TWCS-part1.html">TWCS part 1 - how does it work and when should you use it?</a> - Best suited for time series data that expires, Time Window Compaction Strategy comes with some caveats.</li>

                <li><a href="http://thelastpickle.com/blog/2016/10/18/user-defined-compaction.html">Performing User Defined Compactions in Apache Cassandra</a> - This is a process by which we tell Cassandra to create a compaction task for one or more tables explicitly. </li>

                <li><a href="http://thelastpickle.com/blog/2015/10/23/cassandra-stress-and-graphs.html">Graphing cassandra-stress</a> - Benchmarking schemas and configuration changes using the cassandra-stress tool, before pushing such changes out to production is one of the things every Cassandra developer should know and regularly practice.</li>

                <li><a href="http://thelastpickle.com/blog/2017/02/08/Modeling-real-life-workloads-with-cassandra-stress.html">Modeling real life workloads with cassandra-stress is hard</a> - </li>

                <li><a href="https://github.com/datastax/gatling-dse-stress">Gatling DSE Stress</a></li>

                <li><a href="https://github.com/datastax/gatling-dse-plugin">Gatling DSE Plugin for Gatling Load injector</a> - This project is a plugin for the Gatling load injector. It adds CQL support in Gatling for Datastax Enterprise. It allows for benchmarking Datastax Enterprise features, including DSE Graph Fluent API.</li>

                <li><a href="https://github.com/datastax/gatling-dse-simcatalog">Gatling DSE Stress Simulation Catalog</a> - The goal of the repo is to provide a sample of the Gatling DSE Stress Framework's usage. Feel free to submit a pull request with example simulations.</li>
                </ul>

                

                <h3 id="cassandrasecurity">Cassandra Security</h3>

                <ul>
                <li><a href="https://www.instaclustr.com/securing-apache-cassandra-with-application-level-encryption/">Securing Apache Cassandra with Application Level Encryption</a> - Discusses how to do application level data encryption to properly manage secure information in Cassandra. </li>

                <li><a href="http://thelastpickle.com/blog/2015/09/30/hardening-cassandra-step-by-step-part-1-server-to-server.html">Hardening Cassandra Step by Step: Part 1</a> - Inter-Node Encryption (And a Gentle Intro to Certificates)</li>

                <li><a href="https://github.com/instaclustr/cassandra-ldap">LDAP Authenticator for Apache Cassandra</a> - This is a pluggable authentication implementation for Apache Cassandra, providing a way to authenticate and create users based on a configured LDAP server. </li>

                <li><a href="https://www.whaletech.co/2016/04/07/encryption-ephemeral-volumes-with-kms.html">Encrypting EC2 ephemeral volumes with LUKS and AWS KMS</a> - The example used here is Cassandra data stored on ephemeral disks.</li>
                </ul>

                

                <h3 id="deployingcassandra">Deploying Cassandra</h3>

                <ul>
                <li><a href="http://thelastpickle.com/blog/2018/01/23/docker-meet-cassandra.html">Docker Meet Cassandra. Cassandra Meet Docker</a> Article reviewing how to setup a complete Cassandra application with monitoring on Docker.</li>

                <li><a href="https://github.com/thelastpickle/docker-cassandra-bootstrap">Example code from the Docker Meet Cassandra Article</a></li>

                <li><a href="https://github.com/nicolasff/docker-cassandra">Docker-Cassandra</a>: A set of scripts and config files to run a Cassandra cluster from Docker.</li>

                <li><a href="https://github.com/academyofdata/cassandra-zeppelin">Cassandra &amp; Zeppelin Notebook on Docker</a>: Docker-Compose script for Cassandra + Zeppelin setup.</li>

                <li><a href="https://github.com/cloudurable/cassandra-image">Packer: Cassandra Image</a> - Cassandra Image using Packer for Docker and EC2 AMI. Covers managing EC2 Cassandra clusters with Ansible.</li>

                <li><a href="https://github.com/instaclustr/cassandra-docker">Cassandra Docker</a> - This is the Instaclustr public docker image for Apache Cassandra. It contains docker images for Cassandra 3.0 and 3.11.1.</li>

                <li><a href="https://github.com/zegelin/cassandra-docker">Cassandra / Elassandra Docker</a> - Apache Cassandra and Elassandra docker images.</li>

                <li><a href="https://github.com/instaclustr/cassandra-operator">Kubernetes Cassandra Operator</a> - The Cassandra operator manages Cassandra clusters deployed to Kubernetes and automates tasks related to operating an Cassandra cluster.</li>

                <li><a href="http://thelastpickle.com/blog/2016/05/07/dcos.html">Running Cassandra on DC/OS (Mesos)</a> -  This blog will show how to setup DC/OS in the Amazon cloud, how to install Apache Cassandra on a DC/OS cluster, and finally new ways to interact with and Apache Cassandra after it is installed.</li>

                <li><a href="http://highscalability.com/blog/2016/8/1/how-to-setup-a-highly-available-multi-az-cassandra-cluster-o.html">How To Setup A Highly Available Multi-AZ Cassandra Cluster On AWS EC2</a></li>

                <li><a href="https://github.com/LoyaltyOne/cassandra-aws">CloudFormation Cassandra AWS</a>- A cassandra cluster for development using Cloud Formation</li>

                <li><a href="https://github.com/thelastpickle/tlp-cluster">tlp-cluster, a tool for launching Cassandra clusters in AWS</a> - A provisioning tool for Apache Cassandra designed for developers looking to both benchmark and test the correctness of Apache Cassandra. It assists with builds and starting instances on AWS.</li>
                </ul>

                <h3 id="integratingwithcassandra">Integrating with Cassandra</h3>

                <ul>
                <li><a href="http://thenewstack.io/building-streaming-data-hub-elasticsearch-kafka-cassandra/">Building a Streaming Data Hub with Elasticsearch, Kafka and Cassandra</a></li>

                <li><a href="https://github.com/Yannael/kafka-sparkstreaming-cassandra">Docker container for Kafka - Spark streaming - Cassandra</a> - This Dockerfile sets up a complete streaming environment for experimenting with Kafka, Spark streaming (PySpark), and Cassandra.</li>

                <li><a href="https://github.com/instaclustr/sample-KafkaSparkCassandra">sample KafkaSparkCassandra</a> - Introductory sample scala app using Apache Spark Streaming to accept data from Kafka and write a summary to Cassandra.</li>

                <li><a href="https://github.com/instaclustr/sample-SparkCassandrawithSSL">sample Spark Cassandra with SSL</a> - Simple sample job illustrating the use of Spark to execute Apache Spark analytics with Cassandra with SSL connection.</li>
                </ul>

                

                <h4 id="spark">Spark</h4>

                <ul>
                <li><a href="https://github.com/datastax/spark-cassandra-connector">DataStax Spark Cassandra Connector</a>: This library lets you expose Cassandra tables as Spark RDDs, write Spark RDDs to Cassandra tables, and execute arbitrary CQL queries in your Spark applications.</li>

                <li><a href="https://github.com/Stratio/stratio-deep">Stratio Deep (deprecated)</a>: Deep is a thin integration layer between Apache Spark and several NoSQL datastores. We actually support Apache Cassandra and MongoDB, but in the near future we will add support for sever other datastores.</li>

                <li><a href="https://github.com/instaclustr/sample-SparkJobserverCassandra">sample Spark Job Server Cassandra</a> - Simple sample job illustrating the use of Spark Jobserver to execute Apache Spark analytics with Cassandra.</li>

                <li><a href="https://github.com/fluxcapacitor/pipeline">fluxcapacitor/pipeline</a>: End-to-End, Real-time, Advanced Analytics Big Data Reference Pipeline using Spark, Spark SQL, Spark ML, GraphX, Spark Streaming, Kafka, NiFi, Cassandra, ElasticSearch, Redis, Tachyon, HDFS, Zeppelin, iPython/Jupyter Notebook, Tableau, Twitter Algebird.</li>
                </ul>

                <h4 id="searchsecondaryindexes">Search / Secondary Indexes</h4>

                <ul>
                <li><a href="http://www.datastax.com/dev/blog/tuning-dse-search">Tuning DSE Search</a> Tuning DSE Search – Indexing latency and query latency</li>

                <li><a href="http://www.elassandra.io/">Elassandra</a>: Elassandra = Elasticsearch as a Cassandra secondary index.</li>

                <li><a href="https://github.com/Stratio/cassandra-lucene-index">Cassandra Lucene Index</a>:  Lucene based secondary indexes for Cassandra</li>

                <li>OLD - <a href="https://github.com/tjake/Solandra">Solandra</a>: Solandra is a real-time distributed search engine built on Apache Solr and Apache Cassandra.</li>

                <li><a href="https://github.com/gradeup/cassandra-trigger">cassandra-trigger</a> - Cassandra trigger to push realtime updates to elasticsearch</li>
                </ul>

                <h2 id="packages">Packages</h2>

                <h3 id="libraries">Libraries</h3>

                <ul>
                <li><a href="https://github.com/masumsoft/express-cassandra">express-cassandra</a> - Cassandra ORM/ODM/OGM for Node.js with optional support for Elassandra &amp; JanusGraph</li>

                <li><a href="https://github.com/datastax/java-driver">DataStax Java Driver</a>: A Java client driver for Apache Cassandra. </li>

                <li><a href="https://github.com/datastax/cpp-driver">DataStax C++ Driver</a>: A modern, feature-rich, and highly tunable C/C++ client library for Apache Cassandra (1.2+) and DataStax Enterprise (3.1+) using exclusively Cassandra's native protocol and Cassandra Query Language v3. http://datastax.github.io/cpp-driver/</li>

                <li><a href="https://github.com/datastax/python-driver">DataStax Python Driver</a>: A modern, feature-rich and highly-tunable Python client library for Apache Cassandra (2.1+) using exclusively Cassandra's binary protocol and Cassandra Query Language v3.</li>

                <li><a href="https://github.com/datastax/ruby-driver">DataStax Ruby Driver</a> : A Ruby client driver for Apache Cassandra. This driver works exclusively with the Cassandra Query Language version 3 (CQL3) and Cassandra's native protocol.</li>

                <li><a href="https://github.com/datastax/nodejs-driver">DataStax NodeJS Driver</a>: A modern, feature-rich and highly tunable Node.js client library for Apache Cassandra (1.2+) and DataStax Enterprise (3.1+) using exclusively Cassandra's binary protocol and Cassandra Query Language v3.</li>

                <li><a href="https://github.com/datastax/csharp-driver">DataStax C# Driver</a> A modern, feature-rich and highly tunable C# client library for Apache Cassandra (1.2+) and DataStax Enterprise (3.1+) using exclusively Cassandra's binary protocol and Cassandra Query Language v3.</li>

                <li><a href="https://github.com/datastax/php-driver">DataStax PHP Driver</a>: DataStax PHP Driver for Apache Cassandra http://datastax.github.io/php-driver/</li>

                <li><a href="http://doanduyhai.github.io/Achilles/">Achilles</a>: Achilles is an open source Persistence Manager for Apache Cassandra,with the features like Advanced bean mapping (compound primary key, composite partition key, timeUUID...),Native collections and map support,and so.</li>

                <li><a href="https://github.com/thobbs/phpcassa">phpcassa</a>: PHP client library for Apache Cassandra</li>

                <li><a href="http://caffinitas.org/mapper/">Caffinitas</a>: Caffinitas is an advanced object mapper for Apache Cassandra which has been especially designed to work with Datastax Java Driver 2.1+ against Apache Cassandra 2.1, 2.0 or 1.2.</li>

                <li><a href="http://projects.spring.io/spring-data-cassandra/">Spring Data for Apache Cassandra</a> -  Spring Data for Apache Cassandra offers a familiar interface to those who have used other Spring Data modules in the past.</li>

                <li><a href="https://github.com/gocql/gocql">gocql</a> - Package gocql implements a fast and robust Cassandra client for the Go programming language.</li>

                <li>OLD - <a href="https://github.com/Netflix/astyanax">Netflix Astyanax</a>: Astyanax is a high level Java client for Apache Cassandra, based on Thrift protocol. Not maintained.</li>
                </ul>

                <h3 id="tools">Tools</h3>

                <ul>
                <li><a href="https://www.dbschema.com/cassandra-designer-tool.html">DbSchema - Cassandra Designer</a> - DbSchema: Cassandra Diagram Designer &amp; GUI Admin Tool which can do Cassandra amongst other databases. </li>

                <li><a href="https://dbeaver.io/">DBEaver - Free Universal Database Tool</a> - A third party tool for dealing with all sorts of databases including Cassandra. </li>

                <li><a href="https://razorsql.com/">RazorSQL - Multi DB Manager Tool</a> - A multi-db tool for Linux, Mac, and Windows that works with Apache Cassandra. </li>

                <li><a href="http://kdm.dataview.org/">KDM - The Kashlev Data Modeler</a> - An automated big data modeling tool for Apache Cassandra</li>

                <li><a href="http://cassandra-reaper.io/">Cassandra Reaper</a>: Automated repairs for Apache Cassandra. Supports all versions. </li>

                <li><a href="https://github.com/datastax/cstar_perf">cstar perf</a> Apache Cassandra performance testing platform</li>

                <li><a href="https://github.com/datastax/spark-cassandra-stress">Spark Cassandra Stress</a> A tool for testing the DataStax Spark Connector against Apache Cassandra or DSE</li>

                <li><a href="https://github.com/o19s/trireme">trireme</a>: Migration tool providing support for Apache Cassandra, DataStax Enterprise Cassandra, &amp; DataStax Enterprise Solr.</li>

                <li><a href="https://github.com/sky-uk/cqlmigrate">cqlmigrate</a> -  Cassandra CQL migration tool. cqlmigrate is a library for performing schema migrations on a cassandra cluster.</li>

                <li><a href="https://github.com/smartcat-labs/cassandra-migration-tool-java">cassandra-migration-tool-java</a> - Cassandra migration tool for java is a lightweight tool used to execute schema and data migration on Cassandra database. </li>

                <li><a href="https://github.com/hawkular/cassalog">cassalog</a> - Cassalog is a schema change management library and tool for Apache Cassandra that can be used with applications running on the JVM.</li>

                <li><a href="https://github.com/rackerlabs/cdeploy">cdeploy</a> - cdeploy is a simple tool to manage your Cassandra schema migrations in the style of dbdeploy.</li>

                <li><a href="https://www.ecyrd.com/cassandracalculator/">Web: Cassandra Calculator</a>: A simple calculator to see how size / replication factor affect the system's consistency.</li>

                <li><a href="http://avalanche123.com/cassandra-web/">Cassandra-web</a> - A web interface for Apache Cassandra
                https://github.com/rohitsakala/CassandraRestfulAPI</li>

                <li><a href="https://github.com/rohitsakala/CassandraRestfulAPI">CassanddraRestfulAPI</a> - CassandraRestfulAPI project exposes the cassandra data tables with the help of Restful API.</li>

                <li><a href="https://github.com/Netflix/staash">Netflix: Staash</a> - A language-agnostic as well as storage-agnostic web interface for storing data into persistent storage systems, the metadata layer abstracts a lot of storage details and the pattern automation APIs take care of automating common data access patterns.</li>

                <li><a href="https://github.com/elubow/cql-vim">cql-vim</a> - Cassandra CQL Syntax Highlighter for Vim</li>

                <li><a href="https://prestodb.io/">Presto</a> - Distributed SQL Query Engine for Big Data. Presto allows querying data where it lives, including Hive, Cassandra, relational databases or even proprietary data stores. </li>

                <li><a href="https://github.com/tolbertam/sstable-tools">Sstable Tools</a> - A toolkit for parsing, creating and doing other fun stuff with Cassandra 3.x SSTables. </li>

                <li><a href="https://github.com/masumsoft/cassandra-exporter">cassandra-exporter</a> - Simple Tool to Export / Import Cassandra Tables into JSON</li>

                <li><a href="https://github.com/instaclustr/cassandra-sstable-tools">Cassandra SStable Tools</a> - A few different tools combined into one that helps admins get summaries, metadata, partition info, cell info. </li>

                <li><a href="https://github.com/Kindrat/cassandra-client">Cassandra-Client</a> - A simple gui tool for browsing tables and data in Cassandra. </li>

                <li><a href="https://www.sestevez.com/sestevez/CassandraDataModeler/">CQL Data Modeler</a> - A very useful tool to test out a CQL schema and visualize what the partition would like in relationship to the columns and rows. </li>
                </ul>

                <h3 id="adminmonitor">Admin / Monitor</h3>

                <ul>
                <li><a href="http://www.datastax.com/what-we-offer/products-services/datastax-opscenter">DataStax OpsCenter</a>: Simplified management for DataStax Enterprise and Cassandra database clusters.</li>

                <li><a href="https://github.com/sebgiroux/Cassandra-Cluster-Admin">Cassandra Cluster Admin</a>: Cassandra Cluster Admin is a GUI tool to help people administrate their Apache Cassandra cluster.</li>

                <li><a href="https://github.com/lookout/cassandra-statsd-agent">Cassandra StatD Agent</a>: Java Agent for Cassandra integration with StatsD </li>

                <li><a href="https://github.com/bart613/cassandra">Cassandra Scripts</a>: Python based cassandra ops scripts to monitor cfstats. </li>

                <li><a href="https://github.com/CrowdStrike/cassandra-tools">Cassandra-Tools</a>: Python Fabric scripts to help automate the launching and managing of cluster testing on AWS. </li>

                <li><a href="https://github.com/spotify/cassandra-opstools">Cassandra Opstools</a>: Generic scripts to review and monitor cassandra, from Spotify.  </li>

                <li><a href="https://github.com/pcmanus/ccm">CCM: Cassandra Cluster Manager)</a>: A script/library to create, launch and remove an Apache Cassandra cluster on localhost.</li>

                <li><a href="https://github.com/causes/cassandra-nagios">Cassandra Nagios</a>: Perl Based scripts to get metrics for monitoring using Jolokia.</li>

                <li><a href="https://github.com/erickramirezDSE/cass_log_tools">Cassandra Log Tools</a>: Simple scripts for working with Apache Cassandra logs.</li>

                <li><a href="https://github.com/jlacefie/cfstats-csv-parser">Cassandra CFStats to CSV Parser</a>: Converts the output of CFStats to CSV. </li>

                <li><a href="https://github.com/Netflix/Priam">Netflix-Priam</a>Co-Process for backup/recovery, Token Management, and Centralized Configuration management for Cassandra.</li>

                <li><a href="https://github.com/spotify/cstar">CStar</a> - Apache Cassandra cluster orchestration tool for the command line.</li>

                <li><a href="https://github.com/pixonic/ctop">ctop</a> - This is a very simple console tool for monitoring column families read/write activities at remote cassandra host.</li>
                </ul>

                <h3 id="queuesschedulers">Queues / Schedulers</h3>

                <ul>
                <li><a href="https://github.com/Comcast/cmb">CMB</a>: A highly available, horizontally scalable queuing and notification service compatible with AWS SQS and SNS</li>

                <li><a href="https://github.com/paradoxical-io/cassieq">CassieQ</a>: A Distributed queue built off of Cassandra.</li>

                <li><a href="https://eng.uber.com/cherami/">Cherami</a> : Distributed, scalable, durable, and highly available message queue system.</li>

                <li><a href="https://github.com/PagerDuty/scheduler">scheduler</a> : A Scala library for scheduling arbitrary code to run at an arbitrary time.</li>
                </ul>

                <h3 id="logging">Logging</h3>

                <ul>
                <li><a href="https://github.com/datastax/cassandra-log4j-appender">cassandra-log4j-appender</a>: Cassandra appenders for Log4j</li>
                </ul>

                <h3 id="opensourceapplications">Open Source Applications</h3>

                <ul>
                <li><a href="https://github.com/twissandra/twissandra">Twissandra</a> - Twissandra is an example project, created to learn and demonstrate how to use Cassandra. Running the project will present a website that has similar functionality to Twitter.</li>

                <li><a href="https://github.com/filodb/FiloDB">FiloDB</a> - High-performance distributed analytical database + Spark SQL queries + built for streaming.</li>

                <li><a href="https://github.com/cyngn/ChronoServer">ChronoServer</a> - A test server for sampling how long it takes mobile &amp; web clients to make various types of requests to a server doing common request patterns. </li>
                </ul>

                <h2 id="resources">Resources</h2>

                <h3 id="documentation">Documentation</h3>

                <ul>
                <li><a href="http://cassandra.apache.org/doc/">Apache Cassandra Documentation</a> Definitive documentation for all published versions. </li>

                <li><a href="http://docs.datastax.com/en/landing_page/doc/landing_page/current.html">DataStax Documentation</a> Documentation and Drivers from DataStax </li>
                </ul>

                <h3 id="books">Books</h3>

                <ul>
                <li><a href="http://shop.oreilly.com/product/0636920043041.do">Cassandra: The Definitive Guide, 2nd Edition</a></li>

                <li><a href="https://www.packtpub.com/big-data-and-business-intelligence/cassandra-high-availability">Cassandra High Availability</a></li>
                </ul>

                <h3 id="courses">Courses</h3>

                <ul>
                <li><a href="https://academy.datastax.com/">DataStax Academy</a>: Free online courses on Cassandra</li>
                </ul>

                <h3 id="communities">Communities</h3>

                <ul>
                <li><a href="http://www.mail-archive.com/user@cassandra.apache.org/">Apache Cassandra Users Mailing List</a></li>

                <li><a href="http://www.mail-archive.com/dev@cassandra.apache.org/">Apache Cassandra Developers Mailing List</a></li>

                <li><a href="http://www.mail-archive.com/commits@cassandra.apache.org/">Apache Cassandra Commits Mailing List</a></li>

                <li><a href="https://academy.datastax.com/slack">Datastax Academy Slack</a></li>

                <li><a href="https://cassandra-slack.herokuapp.com/">Cassandra Slack</a></li>

                <li><a href="https://stackoverflow.com/questions/tagged/cassandra">StackOverflow: Cassandra</a></li>

                <li><a href="https://stackoverflow.com/questions/tagged/cql">StackOverflow: cql</a></li>

                <li><a href="https://stackoverflow.com/questions/tagged/spark-cassandra-connector">StackOverflow: spark-cassandra-connector</a></li>

                <li><a href="https://www.quora.com/topic/Cassandra-database">Quora: Cassandra</a></li>

                <li><a href="https://www.meetup.com/topics/cassandra/?_cookie-check=mHgLvBy3N6Cke1RU">Meetups: Cassandra</a></li>
                </ul>

                <h3 id="blogs">Blogs</h3>

                <ul>
                <li><a href="https://www.datastax.com/blog">Datastax</a></li>

                <li><a href="https://academy.datastax.com/developer-blog">Datastax Academy</a></li>

                <li><a href="https://blog.codecentric.de/en/tag/cassandra/">Codecentric: Cassandra</a></li>

                <li><a href="https://blog.pythian.com/technical-track/cassandra-2/">Pythian: Cassandra</a></li>

                <li><a href="https://www.instaclustr.com/blog/">Instaclustr</a> </li>

                <li><a href="https://cassandra-zone.com/">Cassandra Zone</a> - Findings and musings on Apache Cassandra</li>

                <li><a href="https://blog.alteroot.org/categories/cassandra/index.html">Altheroot:Cassandra</a></li>

                <li><a href="https://opencredo.com/tag/cassandra/">OpenCredo:Cassandra</a></li>

                <li><a href="http://www.doanduyhai.com/blog/?cat=57">DOAN DuyHai's Blog: Cassandra</a></li>

                <li><a href="https://tobert.github.io/">Amy Tobert</a></li>

                <li><a href="http://batey.info/cassandra.html">Christopher Batey: Cassandra</a></li>

                <li><a href="https://distributedbytes.timojo.com/search/label/cassandra">Distributed Bytes:Cassandra</a></li>

                <li><a href="https://medium.com/netflix-techblog">The Netflix Tech Blog</a></li>

                <li><a href="https://lostechies.com/ryansvihla/tags">Ryan Svilha</a></li>

                <li><a href="https://blog.anant.us/tag/datastax/">Anant</a></li>
                </ul>

                <h3 id="videos">Videos</h3>

                <ul>
                <li><a href="https://www.youtube.com/watch?v=IuJldwJLyFM">Best Practices for Running Cassandra on AWS</a></li>

                <li><a href="https://www.youtube.com/watch?v=Q9AAR4UQzMk">Monitoring Cassandra: Don't Miss a Thing (Alain Rodriguez, The Last Pickle) | C* Summit 2016</a></li>

                <li><a href="https://academy.datastax.com/resources/Multi-Region-Cassandra-in-AWS">GumGum: Multi-Region Cassandra in AWS</a></li>

                <li><a href="https://www.youtube.com/watch?v=cKIHRD6kUOc&amp;feature=youtu.be">Tuning the Spark Cassandra Connector</a> - Great talk by Russell Spitzer maintainer of the Spark Cassandra connector. </li>
                </ul>

                <h3 id="slides">Slides</h3>

                <ul>
                <li><a href="https://www.slideshare.net/SimranKedia2/cassandra-datatables-using-restful-api">Cassandra DataTables Using Restful API</a> A case on how to create a performant API using Python / Flash.</li>

                <li><a href="https://github.com/victorcouste/hapi-cassandra">HAPI Cassandra</a> A simple REST API with hapi nodejs framework on top of a Apache Cassandra database  </li>

                <li><a href="https://www.slideshare.net/planetcassandra/gumgum-multiregion-cassandra-in-aws">GumGum: Multi-Region Cassandra in AWS</a></li>

                <li><a href="https://www.slideshare.net/aploetz/cql-this-is-not-the-sql-you-are-loooking-for">CQL: This is not the SQL you are Looking For</a></li>

                <li><a href="https://www.slideshare.net/zznate/hardening-cassandra-for-compliance-or-paranoia">Hardening cassandra for compliance or paranoia</a></li>

                <li><a href="https://www.slideshare.net/planetcassandra/securing-cassandra-the-right-way">Securing Cassandra</a></li>

                <li><a href="https://www.slideshare.net/DataStax/maximum-overdrive-tuning-the-spark-cassandra-connector-russell-spitzer-datastax-c-summit-2016">Tuning the Spark Cassandra Connector</a> - Slides by Russell Spitzer maintainer of the Spark Cassandra connector. </li>
                </ul>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Architect