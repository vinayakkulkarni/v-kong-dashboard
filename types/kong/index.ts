export type KongResponse = {
  version: string;
  configuration: Configuration;
  lua_version: string;
  node_id: string;
  timers: Timers;
  plugins: Plugins;
  pids: Pids;
  tagline: string;
  hostname: string;
};

export type Configuration = {
  ssl_session_tickets: string;
  nginx_http_ssl_session_tickets: string;
  nginx_stream_ssl_session_tickets: string;
  ssl_session_timeout: string;
  nginx_http_ssl_session_timeout: string;
  nginx_stream_ssl_session_timeout: string;
  proxy_access_log: string;
  proxy_error_log: string;
  proxy_stream_access_log: string;
  proxy_stream_error_log: string;
  admin_access_log: string;
  admin_error_log: string;
  status_access_log: string;
  status_error_log: string;
  log_level: string;
  vaults: string[];
  nginx_optimizations: boolean;
  lua_ssl_trusted_certificate: LuaSslTrustedCertificate;
  lua_package_path: string;
  lua_ssl_protocols: string;
  nginx_http_lua_ssl_protocols: string;
  nginx_stream_lua_ssl_protocols: string;
  lua_socket_pool_size: number;
  cluster_control_plane: string;
  cluster_mtls: string;
  prefix: string;
  proxy_ssl_enabled: boolean;
  cluster_data_plane_purge_delay: number;
  role: string;
  cluster_max_payload: number;
  untrusted_lua: string;
  untrusted_lua_sandbox_requires: UntrustedLuaSandboxRequires;
  untrusted_lua_sandbox_environment: UntrustedLuaSandboxEnvironment;
  loaded_vaults: LoadedVaults;
  plugins: string[];
  loaded_plugins: LoadedPlugins;
  pluginserver_names: PluginserverNames;
  stream_proxy_ssl_enabled: boolean;
  admin_ssl_enabled: boolean;
  status_ssl_enabled: boolean;
  status_listeners: StatusListeners;
  go_plugins_dir: string;
  client_ssl: boolean;
  go_pluginserver_exe: string;
  dns_hostsfile: string;
  nginx_events_directives: NginxEventsDirec[];
  nginx_http_directives: NginxHttpDirec[];
  dns_error_ttl: number;
  dns_not_found_ttl: number;
  dns_stale_ttl: number;
  dns_cache_size: number;
  dns_order: string[];
  ssl_cipher_suite: string;
  dns_no_sync: boolean;
  ssl_ciphers: string;
  nginx_supstream_directives: NginxSupstreamDirectives;
  nginx_sproxy_directives: NginxSproxyDirectives;
  ssl_cert: string[];
  nginx_http_upstream_directives: NginxHttpUpstreamDirectives;
  nginx_http_status_directives: NginxHttpStatusDirectives;
  lua_package_cpath: string;
  error_default_type: string;
  db_update_frequency: number;
  db_update_propagation: number;
  admin_acc_logs: string;
  nginx_conf: string;
  db_cache_ttl: number;
  nginx_kong_stream_conf: string;
  kong_env: string;
  ssl_cert_csr_default: string;
  ssl_cert_default: string;
  ssl_cert_key_default: string;
  ssl_cert_default_ecdsa: string;
  ssl_cert_key_default_ecdsa: string;
  worker_consistency: string;
  client_ssl_cert_key_default: string;
  admin_ssl_cert_default: string;
  admin_ssl_cert_key_default: string;
  admin_ssl_cert_default_ecdsa: string;
  admin_ssl_cert_key_default_ecdsa: string;
  status_ssl_cert_default: string;
  status_ssl_cert_key_default: string;
  status_ssl_cert_default_ecdsa: string;
  status_ssl_cert_key_default_ecdsa: string;
  nginx_main_worker_rlimit_nofile: string;
  nginx_events_worker_connections: string;
  nginx_events_multi_accept: string;
  port_maps: PortMaps;
  database: string;
  proxy_listen: string[];
  ssl_cert_key: string[];
  status_listen: string[];
  stream_listen: string[];
  cluster_listen: string[];
  admin_ssl_cert: AdminSslCert;
  admin_ssl_cert_key: AdminSslCertKey;
  status_ssl_cert: StatusSslCert;
  status_ssl_cert_key: StatusSslCertKey;
  db_resurrect_ttl: number;
  nginx_user: string;
  kic: boolean;
  nginx_main_user: string;
  mem_cache_size: string;
  nginx_admin_client_max_body_size: string;
  nginx_worker_processes: string;
  nginx_main_worker_processes: string;
  nginx_admin_client_body_buffer_size: string;
  trusted_ips: TrustedIps;
  real_ip_header: string;
  nginx_proxy_real_ip_header: string;
  real_ip_recursive: string;
  host_ports: HostPorts;
  anonymous_reports: boolean;
  nginx_http_client_max_body_size: string;
  client_body_buffer_size: string;
  nginx_http_client_body_buffer_size: string;
  pg_port: number;
  pg_password: string;
  pg_ssl: boolean;
  pg_ssl_verify: boolean;
  pg_max_concurrent_queries: number;
  pg_semaphore_timeout: number;
  pg_host: string;
  pg_ro_ssl: boolean;
  pg_ro_ssl_verify: boolean;
  upstream_keepalive_idle_timeout: number;
  upstream_keepalive_max_requests: number;
  cassandra_port: number;
  headers: string[];
  cassandra_ssl_verify: boolean;
  cassandra_write_consistency: string;
  admin_listen: string[];
  upstream_keepalive_pool_size: number;
  cluster_ocsp: string;
  nginx_main_daemon: string;
  nginx_http_lua_regex_match_limit: string;
  dns_resolver: DnsResolver;
  cluster_listeners: ClusterListener[];
  cassandra_read_consistency: string;
  cassandra_schema_consensus_timeout: number;
  worker_state_update_frequency: number;
  cassandra_lb_policy: string;
  lua_ssl_verify_depth: number;
  cassandra_contact_points: string[];
  nginx_daemon: string;
  client_max_body_size: string;
  pg_user: string;
  cassandra_refresh_frequency: number;
  cassandra_repl_strategy: string;
  nginx_proxy_real_ip_recursive: string;
  pg_timeout: number;
  cassandra_repl_factor: number;
  cassandra_data_centers: string[];
  cassandra_keyspace: string;
  pg_database: string;
  cassandra_timeout: number;
  cassandra_ssl: boolean;
  ssl_protocols: string;
  cassandra_username: string;
  nginx_http_ssl_protocols: string;
  nginx_stream_ssl_protocols: string;
  ssl_prefer_server_ciphers: string;
  nginx_http_ssl_prefer_server_ciphers: string;
  nginx_stream_ssl_prefer_server_ciphers: string;
  ssl_dhparam: string;
  nginx_http_ssl_dhparam: string;
  nginx_stream_ssl_dhparam: string;
  nginx_main_directives: NginxMainDirec[];
  nginx_upstream_directives: NginxUpstreamDirectives;
  nginx_proxy_directives: NginxProxyDirec[];
  nginx_status_directives: NginxStatusDirectives;
  nginx_admin_directives: NginxAdminDirec[];
  nginx_stream_directives: NginxStreamDirec[];
  proxy_listeners: ProxyListener[];
  stream_listeners: StreamListeners;
  admin_listeners: AdminListener[];
  enabled_headers: EnabledHeaders;
  db_cache_warmup_entities: string[];
  nginx_pid: string;
  nginx_err_logs: string;
  nginx_acc_logs: string;
  nginx_kong_conf: string;
  client_ssl_cert_default: string;
};

export type LuaSslTrustedCertificate = {};

export type UntrustedLuaSandboxRequires = {};

export type UntrustedLuaSandboxEnvironment = {};

export type LoadedVaults = {};

export type LoadedPlugins = {
  jwt: boolean;
  acl: boolean;
  'correlation-id': boolean;
  cors: boolean;
  oauth2: boolean;
  'tcp-log': boolean;
  'udp-log': boolean;
  'file-log': boolean;
  'http-log': boolean;
  'key-auth': boolean;
  'hmac-auth': boolean;
  'basic-auth': boolean;
  'ip-restriction': boolean;
  'request-transformer': boolean;
  'response-transformer': boolean;
  'request-size-limiting': boolean;
  'rate-limiting': boolean;
  'response-ratelimiting': boolean;
  syslog: boolean;
  loggly: boolean;
  datadog: boolean;
  'ldap-auth': boolean;
  statsd: boolean;
  'bot-detection': boolean;
  'aws-lambda': boolean;
  'request-termination': boolean;
  prometheus: boolean;
  'proxy-cache': boolean;
  session: boolean;
  acme: boolean;
  'grpc-gateway': boolean;
  'grpc-web': boolean;
  'pre-function': boolean;
  'post-function': boolean;
  'azure-functions': boolean;
  zipkin: boolean;
  'path-prefix': boolean;
};

export type PluginserverNames = {};

export type StatusListeners = {};

export type NginxEventsDirec = {
  name: string;
  value: string;
};

export type NginxHttpDirec = {
  name: string;
  value: string;
};

export type NginxSupstreamDirectives = {};

export type NginxSproxyDirectives = {};

export type NginxHttpUpstreamDirectives = {};

export type NginxHttpStatusDirectives = {};

export type PortMaps = {};

export type AdminSslCert = {};

export type AdminSslCertKey = {};

export type StatusSslCert = {};

export type StatusSslCertKey = {};

export type TrustedIps = {};

export type HostPorts = {};

export type DnsResolver = {};

export type ClusterListener = {
  ssl: boolean;
  http2: boolean;
  proxy_protocol: boolean;
  deferred: boolean;
  ip: string;
  'backlog=%d+': boolean;
  port: number;
  bind: boolean;
  reuseport: boolean;
  listener: string;
};

export type NginxMainDirec = {
  name: string;
  value: string;
};

export type NginxUpstreamDirectives = {};

export type NginxProxyDirec = {
  name: string;
  value: string;
};

export type NginxStatusDirectives = {};

export type NginxAdminDirec = {
  name: string;
  value: string;
};

export type NginxStreamDirec = {
  name: string;
  value: string;
};

export type ProxyListener = {
  ssl: boolean;
  http2: boolean;
  listener: string;
  deferred: boolean;
  ip: string;
  port: number;
  bind: boolean;
  reuseport: boolean;
  'backlog=16384': boolean;
  proxy_protocol: boolean;
};

export type StreamListeners = {};

export type AdminListener = {
  ssl: boolean;
  http2: boolean;
  proxy_protocol: boolean;
  deferred: boolean;
  ip: string;
  'backlog=%d+': boolean;
  port: string;
  bind: boolean;
  reuseport: boolean;
  listener: string;
};

export type EnabledHeaders = {
  server_tokens: boolean;
  latency_tokens: boolean;
  'X-Kong-Response-Latency': boolean;
  'X-Kong-Admin-Latency': boolean;
  'X-Kong-Upstream-Latency': boolean;
  'X-Kong-Upstream-Status': boolean;
  Server: boolean;
  'X-Kong-Proxy-Latency': boolean;
  Via: boolean;
};

export type Timers = {
  pending: number;
  running: number;
};

export type Plugins = {
  available_on_server: AvailableOnServer;
  enabled_in_cluster: string[];
};

export type AvailableOnServer = {
  jwt: boolean;
  acl: boolean;
  'correlation-id': boolean;
  cors: boolean;
  oauth2: boolean;
  'tcp-log': boolean;
  'udp-log': boolean;
  'file-log': boolean;
  'http-log': boolean;
  'key-auth': boolean;
  'hmac-auth': boolean;
  'basic-auth': boolean;
  'ip-restriction': boolean;
  'request-transformer': boolean;
  'response-transformer': boolean;
  'request-size-limiting': boolean;
  'rate-limiting': boolean;
  'response-ratelimiting': boolean;
  syslog: boolean;
  loggly: boolean;
  datadog: boolean;
  'ldap-auth': boolean;
  statsd: boolean;
  'bot-detection': boolean;
  'aws-lambda': boolean;
  'request-termination': boolean;
  prometheus: boolean;
  'proxy-cache': boolean;
  session: boolean;
  acme: boolean;
  'grpc-gateway': boolean;
  'grpc-web': boolean;
  'pre-function': boolean;
  'post-function': boolean;
  'azure-functions': boolean;
  zipkin: boolean;
  'path-prefix': boolean;
};

export type Pids = {
  workers: number[];
  master: number;
};
