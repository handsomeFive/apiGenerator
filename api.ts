type PageInfo<T> = {
  current: number;
  list: T;
  pageSize: number;
  total: number;
  totalPage: number;
}

type Result<T> = {
  code: string;
  data: T;
  message: string;
  success: boolean;
}

interface AnswerBO {
  authorId: number;
  authorName: string;
  authorUrl: string;
  content: string;
  coverFile: FileShortBO;
  id: number;
  isDraft: number;
  type: number;
  url: string;
}

interface AnswerDTO {
  authorId: number;
  authorName: string;
  content: string;
  id: number;
  isDraft: number;
  type: number;
  url: string;
}

interface ArticleBO {
  articleContent: string;
  createTime: string;
  id: number;
  tags: TagBO[];
  updateTime: string;
}

interface ArticleSaveDTO {
  authorId: number;
  content: string;
  fileId: number;
  id: number;
  isDraft: boolean;
  summary: string;
  tagIds: string;
  title: string;
}

interface ArticleTemplateSaveDTO {
  authorId: number;
  content: string;
  fileId: number;
  id: number;
  summary: string;
  tagIds: string;
  title: string;
}

interface AuthorBO {
  authorName: string;
  avatarFileId: number;
  headImageUrl: string;
  id: number;
}

interface AuthorPageBO {
  associateCount: number;
  authorName: string;
  avatarFileId: number;
  createTime: string;
  headImageUrl: string;
  id: number;
  introduction: string;
  updateTime: string;
  viewCount: number;
}

interface CategoryBO {
  categoryName: string;
  description: string;
  id: number;
  modelType: string;
  sort: number;
}

interface ContentArticleBO {
  authorBO: AuthorBO;
  bizId: number;
  content: string;
  fileShortBO: FileShortBO;
  platformSource: string;
  purpose: string[];
  summary: string;
  tags: TagBO[];
  title: string;
}

interface ContentInfoBO {
  bizType: string;
  id: number;
  title: string;
}

interface ContentOperationBO {
  bizId: number;
  bizName: string;
  bizType: string;
  coverFile: FileShortBO;
  deleted: boolean;
  isDraft: boolean;
  isSoldOut: boolean;
  state: number;
}

interface ContentPageBO {
  authorId: number;
  authorName: string;
  bizId: number;
  bizName: string;
  bizStatus: number;
  bizType: string;
  coverFile: FileShortBO;
  createTime: string;
  fileId: number;
  platformSource: string;
  purpose: string[];
  purposeStr: string;
  tagIds: string;
  tags: TagBO[];
  updateTime: string;
}

interface ContentRelBO {
  contentId: number;
  contentTitle: string;
  contentType: string;
  coverFile: FileShortBO;
  description: string;
  isSoldOut: boolean;
}

interface ContentRelDTO {
  contentId: number;
  contentType: string;
  description: string;
}

interface CrowdContentPageBO {
  contentId: string;
  contentTitle: string;
  contentType: string;
  crowdName: string;
  id: number;
  publishTime: string;
}

interface CrowdInfoBO {
  crowdName: string;
  id: number;
}

interface DictionaryTypeBO {
  id: number;
  items: ItemBO[];
  typeCode: string;
  typeName: string;
}

interface EncyclopediaDetailBO {
  cardText: string;
  caseContent: ContentRelBO;
  categoryId: number;
  encyclopediaName: string;
  expand: ContentRelBO;
  goodsRelInfos: GoodsRelInfoBO[];
  hasHot: boolean;
  id: number;
  sort: number;
  tagIdList: TagBO[];
}

interface EncyclopediaPageBO {
  categoryName: string;
  collectCount: number;
  createTime: string;
  encyclopediaName: string;
  helpCount: number;
  id: number;
  sort: number;
  state: number;
  updateTime: string;
  viewCount: number;
}

interface File {
  absolute: boolean;
  absoluteFile: File;
  absolutePath: string;
  canonicalFile: File;
  canonicalPath: string;
  directory: boolean;
  executable: boolean;
  file: boolean;
  freeSpace: number;
  hidden: boolean;
  lastModified: number;
  name: string;
  parent: string;
  parentFile: File;
  path: string;
  readable: boolean;
  totalSpace: number;
  usableSpace: number;
  writable: boolean;
}

interface FileInfoBo {
  createBy: string;
  createTime: string;
  filePath: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  id: number;
  merchantId: number;
  modifyBy: string;
  originalName: string;
  platformSource: string;
  storeId: string;
  storeType: string;
  thumbnailUrl: string;
  updateTime: string;
}

interface FileShortBO {
  fileUrl: string;
  id: number;
}

interface FileUploadOssBO {
  bizFileId: number;
  fileId: number;
  fileName: string;
}

interface GoodsPageBO {
  goodsCoverUrl: string;
  goodsId: number;
  goodsTitle: string;
}

interface GoodsRelInfoBO {
  goodsCoverUrl: string;
  goodsId: number;
  goodsTitle: string;
  isSoldOut: boolean;
}

interface GuideDetailBO {
  bindContent: ContentRelBO;
  categoryId: number;
  categoryName: string;
  createTime: string;
  goodsRelInfos: GoodsRelInfoBO[];
  guideTitle: string;
  helpNum: number;
  id: number;
  likeNum: number;
  sort: number;
  state: number;
  tags: TagBO[];
  truth: string;
  updateTime: string;
  viewNum: number;
  whyIsPits: ContentRelBO[];
}

interface GuidePageBO {
  categoryId: number;
  categoryName: string;
  createTime: string;
  guideTitle: string;
  helpNum: number;
  id: number;
  likeNum: number;
  sort: number;
  state: number;
  updateTime: string;
  viewNum: number;
}

interface GuideSaveDTO {
  avoidPitContentId: number;
  avoidPitContentType: string;
  categoryId: number;
  goodsIds: number[];
  guideTitle: string;
  id: number;
  sort: number;
  tagIds: number[];
  truth: string;
  whyIsPits: ContentRelDTO[];
}

interface InsideLinkBO {
  content: string;
  createBy: string;
  createTime: string;
  deleted: number;
  id: number;
  isMatched: boolean;
  linkNum: number;
  modifyBy: string;
  name: string;
  ranking: number;
  type: number;
  updateTime: string;
  url: string;
}

interface InsideLinkDTO {
  content: string;
  id: number;
  isMatched: boolean;
  ranking: number;
  type: number;
  url: string;
}

interface ItemBO {
  id: number;
  itemCode: string;
  val: string;
}

interface KnowledgeDetailBO {
  angleTitle: string;
  authorName: string;
  cityCode: string;
  cityName: string;
  contentId: number;
  contentType: string;
  fileShortBO: FileShortBO;
  hasComment: boolean;
  hasRecommendHeadline: boolean;
  hasRecommendHomePage: boolean;
  hasRecommendTopic: boolean;
  homePageSort: number;
  id: number;
  likeNum: number;
  productMergeType: number;
  provinceCode: string;
  provinceName: string;
  publishTime: string;
  relContents: ContentRelBO[];
  relGoodsInfos: GoodsRelInfoBO[];
  seoDescription: string;
  seoKeyword: string;
  seoTitle: string;
  state: number;
  subTopic: string;
  subTopicSetIds: number[];
  tags: TagBO[];
  title: string;
  topic: string;
  topicId: number;
  topicSort: number;
  viewNum: number;
}

interface KnowledgePageBO {
  authorName: string;
  cityCode: string;
  cityName: string;
  contentId: number;
  contentType: string;
  fileShortBO: FileShortBO;
  id: number;
  likeNum: number;
  productMergeType: number;
  provinceCode: string;
  provinceName: string;
  publishTime: string;
  state: number;
  subTopic: string;
  subTopicSetIds: number[];
  tags: TagBO[];
  title: string;
  topic: string;
  topicId: number;
  viewNum: number;
}

interface KnowledgeSaveDTO {
  angleTitle: string;
  cityCode: string;
  cityName: string;
  contentId: number;
  contentType: string;
  contents: ContentRelDTO[];
  goodsIds: number[];
  hasComment: boolean;
  hasRecommendHeadline: boolean;
  hasRecommendHomePage: boolean;
  hasRecommendTopic: boolean;
  homePageSort: number;
  id: number;
  productMergeType: number;
  provinceCode: string;
  provinceName: string;
  seoDescription: string;
  seoKeyword: string[];
  seoTitle: string;
  subTopicSetIds: number[];
  topicId: number;
  topicSort: number;
  viewNum: number;
}

interface LibraryBO {
  createBy: string;
  createTime: string;
  deleted: number;
  id: number;
  merchantId: number;
  modifyBy: string;
  name: string;
  platformSource: string;
  updateTime: string;
}

interface LibraryDTO {
  id: number;
  name: string;
}

interface MaterialMediaPageBO {
  coverFile: FileShortBO;
  coverFileId: number;
  createTime: string;
  fileId: number;
  materialFile: FileShortBO;
  materialId: number;
  materialName: string;
  materialType: string;
  tagIds: string;
  tagList: TagBO[];
}

interface MobileLinkBO {
  content: string;
  createBy: string;
  createTime: string;
  deleted: number;
  id: number;
  modifyBy: string;
  platform: string;
  ranking: number;
  state: number;
  updateTime: string;
  url: string;
}

interface MobileLinkDTO {
  content: string;
  id: number;
  platform: string;
  ranking: number;
  state: number;
  url: string;
}

interface PCLinkBO {
  backText: string;
  backUrl: string;
  contactWay: string;
  createBy: string;
  createTime: string;
  deleted: number;
  friendText: string;
  friendUrl: string;
  id: number;
  modifyBy: string;
  state: number;
  updateTime: string;
}

interface PCLinkDTO {
  backText: string;
  backUrl: string;
  contactWay: string;
  friendText: string;
  friendUrl: string;
  id: number;
  state: number;
}

interface QuestionBO {
  answers: AnswerBO[];
  content: string;
  coverFile: FileShortBO[];
  id: number;
  isDraft: boolean;
  questioner: string;
  tags: TagBO[];
  url: string;
}

interface QuestionDTO {
  answers: AnswerDTO[];
  content: string;
  id: number;
  isDraft: boolean;
  questioner: string;
  state: number;
  tags: TagDTO[];
  url: string[];
}

interface QuestionPageBO {
  categoryName: string;
  collectCount: number;
  contentTitle: string;
  helpCount: number;
  id: number;
  publishTime: string;
  sort: number;
  state: number;
  viewCount: number;
}

interface RemarkBO {
  authorName: string;
  bizId: number;
  bizType: string;
  content: string;
  contentInfoBO: ContentInfoBO;
  createBy: string;
  createTime: string;
  deleted: number;
  id: number;
  isTop: number;
  modifyBy: string;
  replies: RemarkReplyBO[];
  state: number;
  updateTime: string;
}

interface RemarkReplyBO {
  content: string;
  createBy: string;
  createTime: string;
  deleted: number;
  id: number;
  modifyBy: string;
  remarkId: number;
  updateTime: string;
}

interface ReplyMessageDTO {
  id: number;
  replyContent: string;
}

interface Resource {
  description: string;
  file: File;
  filename: string;
  inputStream: InputStream;
  open: boolean;
  readable: boolean;
  uri: URI;
  url: URL;
}

interface SensitiveWordBO {
  createBy: string;
  createTime: string;
  deleted: number;
  id: number;
  keywords: string[];
  libraryId: number;
  merchantId: number;
  modifyBy: string;
  platformSource: string;
  riskLevel: string;
  rule: string;
  triggerCount: number;
  updateTime: string;
}

interface SensitiveWordPageDTO {
  current: number;
  id: number;
  keywords: string[];
  libraryId: number;
  offset: number;
  pageSize: number;
  riskLevel: string;
  rule: string;
  searchWord: string;
  sorts: 排序字段[];
}

interface TagBO {
  bizId: number;
  id: number;
  name: string;
  tagGroupId: number;
}

interface TagDTO {
  id: number;
  name: string;
}

interface TagGroupCategoryDTO {
  id: number;
  name: string;
}

interface TagGroupDTO {
  categoryId: number;
  id: number;
  name: string;
  tags: TagDTO[];
}

interface URI {
  absolute: boolean;
  authority: string;
  fragment: string;
  host: string;
  opaque: boolean;
  path: string;
  port: number;
  query: string;
  rawAuthority: string;
  rawFragment: string;
  rawPath: string;
  rawQuery: string;
  rawSchemeSpecificPart: string;
  rawUserInfo: string;
  scheme: string;
  schemeSpecificPart: string;
  userInfo: string;
}

interface URL {
  authority: string;
  content: object;
  defaultPort: number;
  deserializedFields: URLStreamHandler;
  file: string;
  host: string;
  path: string;
  port: number;
  protocol: string;
  query: string;
  ref: string;
  serializedHashCode: number;
  userInfo: string;
}

interface 人工审核流程 {
  flowModelKey: string;
  flowName: string;
}

interface 作者保存入参 {
  authorName: string;
  avatarFileId: string;
  id: number;
  introduction: string;
  name: string;
}

interface 保险攻略新增入参 {
  contentId: number;
  contentType: string;
  crowdId: number;
}

interface 修改审核流程入参 {
  auditFlowName: string;
  contentTypes: string[];
  flowModelKey: string;
  flowName: string;
  id: number;
  isIntelligent: boolean;
  isLabour: boolean;
  passLevel: string;
  purposes: string[];
  sensitiveWordLibIds: number[];
}

interface 内容发布信息 {
  contentId: number;
  contentType: string;
  publishTime: string;
  publishType: string;
  purposes: string[];
}

interface 内容多媒体保存入参 {
  appendixFileId: number;
  authorId: number;
  bizId: number;
  bizType: string;
  coverFileId: number;
  digest: string;
  fileId: number;
  isDraft: boolean;
  tagIdList: number[];
  title: string;
}

interface 内容多媒体详情 {
  appendixFile: FileShortBO;
  authorId: number;
  authorName: string;
  bizId: number;
  bizType: string;
  contentFile: FileShortBO;
  coverFile: FileShortBO;
  digest: string;
  isDraft: boolean;
  tagIds: string;
  tagList: TagBO[];
  title: string;
}

interface 内容接口 {
  bizId: number;
  bizType: string;
}

interface 分类管理保存入参 {
  categoryName: string;
  description: string;
  id: number;
  modelType: string;
  sort: number;
}

interface 发布详情 {
  bizId: number;
  bizType: string;
  publishTime: string;
  publishType: string;
  purpose: string[];
}

interface 审核流程 {
  auditFlowName: string;
  contentTypes: string[];
  flowModelKey: string;
  flowName: string;
  id: number;
  isIntelligent: boolean;
  isLabour: boolean;
  manualFlowName: string;
  passLevel: string;
  purposes: string[];
  sensitiveWordLibBOs: 敏感词库[];
}

interface 审核记录返回参数 {
  auditState: number;
  auditStateName: string;
  contentTitle: string;
  contentType: string;
  createTime: string;
  currentNodeWorkCode: string;
  currentNodeWorkName: string;
  id: number;
  intelligentAuditRecordBOS: 智能审核记录[];
  labourAuditNo: string;
  labourAuditUrl: string;
  manualFlowNo: string;
  operateTime: string;
  operator: string;
  purposes: string;
  riskLevel: string;
  state: number;
  stateName: string;
  updateTime: string;
}

interface 排序字段 {
  hasAsc: boolean;
  sortField: string;
}

interface 敏感词库 {
  id: number;
  name: string;
}

interface 新增审核流程入参 {
  auditFlowName: string;
  contentTypes: string[];
  flowModelKey: string;
  flowName: string;
  isIntelligent: boolean;
  isLabour: boolean;
  passLevel: string;
  purposes: string[];
  sensitiveWordLibIds: number[];
}

interface 智能审核记录 {
  errorContent: string;
  errorCount: number;
  id: number;
  item: string;
  riskLevel: string;
}

interface 标签组 {
  categoryId: number;
  citeCount: number;
  id: number;
  name: string;
  tags: TagBO[];
}

interface 标签组分类 {
  id: number;
  name: string;
  tagGroups: 标签组[];
}

interface 添加文摘 {
  articleContent: string;
  id: number;
  tagIds: string;
}

interface 百科词典保存入参 {
  cardText: string;
  caseContent: ContentRelDTO;
  categoryId: number;
  encyclopediaName: string;
  expand: ContentRelDTO;
  goodsIds: number[];
  hasHot: boolean;
  id: number;
  sort: number;
  tagIdList: number[];
}

interface 素材多媒体保存入参 {
  coverFileId: number;
  materialFileId: number;
  materialId: number;
  materialName: string;
  materialType: string;
  tagIdList: number[];
}

interface 素材多媒体公共参数 {
  materialId: number;
  materialType: string;
}

interface 问答管理保存入参 {
  categoryId: number;
  commentSwitch: boolean;
  contentId: number;
  contents: ContentRelDTO[];
  goodsIds: number[];
  id: number;
  sort: number;
}

interface 问答管理详情 {
  categoryId: number;
  commentSwitch: boolean;
  contents: ContentRelBO[];
  goodsRelInfos: GoodsRelInfoBO[];
  id: number;
  sort: number;
}

interface 阿里云文件上传 {
  contentType: string;
  fileSize: number;
  fileUrl: string;
  originalName: string;
}

interface 阿里云文件上传临时验证 {
  accessKeyId: string;
  accessKeySecret: string;
  bucket: string;
  endpoint: string;
  expiration: string;
  securityToken: string;
}

interface postApiOcAuditFlowRequest {
  auditFlowAddDTO: 新增审核流程入参;
}

interface putApiOcAuditFlowRequest {
  auditFlowUpdateDTO: 修改审核流程入参;
}

interface getApiOcAuditFlowPageRequest {
  auditFlowName?: string;
  current?: number;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
}

interface getApiOcAuditRecordPageRequest {
  contentTitle?: string;
  contentType?: string;
  current?: number;
  endTime?: number;
  isQuerySelf?: boolean;
  offset?: number;
  pageSize?: number;
  purpose?: string;
  riskLevel?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
  state?: number;
}

interface postApiOcAuthorRequest {
  authorSaveDTO: 作者保存入参;
}

interface putApiOcAuthorRequest {
  authorSaveDTO: 作者保存入参;
}

interface getApiOcAuthorCheckNameRequest {
  authorName: string;
}

interface getApiOcAuthorPageRequest {
  authorName?: string;
  current?: number;
  endTime?: number;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
}

interface postApiOcContentArticleRequest {
  articleDTO: ArticleSaveDTO;
}

interface getApiOcContentArticlePageRequest {
  authorId?: number;
  bizName?: string;
  bizStatus?: number;
  bizType?: string;
  contentIds?: number[];
  current?: number;
  endCreateTime?: number;
  endUpdateTime?: number;
  isDraft?: boolean;
  offset?: number;
  pageSize?: number;
  platformSource?: string;
  purpose?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startCreateTime?: number;
  startUpdateTime?: number;
  tagId?: number;
  tagsId?: number[];
}

interface getApiOcContentArticlePublishedPageRequest {
  authorId?: number;
  bizName?: string;
  bizStatus?: number;
  bizType?: string;
  contentIds?: number[];
  current?: number;
  endCreateTime?: number;
  endUpdateTime?: number;
  isDraft?: boolean;
  offset?: number;
  pageSize?: number;
  platformSource?: string;
  purpose?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startCreateTime?: number;
  startUpdateTime?: number;
  tagId?: number;
  tagsId?: number[];
}

interface postApiOcContentMediaRequest {
  authorSaveDTO: 内容多媒体保存入参;
}

interface putApiOcContentMediaRequest {
  authorSaveDTO: 内容多媒体保存入参;
}

interface deleteApiOcContentMediaRequest {
  contentDTO: 内容接口;
}

interface getApiOcContentMediaDetailRequest {
  bizId?: number;
  bizType?: string;
}

interface getApiOcContentMediaPageRequest {
  authorId?: number;
  bizName?: string;
  bizStatus?: number;
  bizType?: string;
  contentIds?: number[];
  current?: number;
  endCreateTime?: number;
  endUpdateTime?: number;
  isDraft?: boolean;
  offset?: number;
  pageSize?: number;
  platformSource?: string;
  purpose?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startCreateTime?: number;
  startUpdateTime?: number;
  tagId?: number;
  tagsId?: number[];
}

interface getApiOcContentOperationPageRequest {
  bizId?: number;
  bizType?: string;
  current?: number;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  title?: string;
}

interface postApiOcContentPublishRequest {
  contentPublishDTO: 内容发布信息;
}

interface postApiOcContentPutawayRequest {
  contentDTO: 内容接口;
}

interface postApiOcContentSoldoutRequest {
  contentDTO: 内容接口;
}

interface postApiOcFileUploadRequest {
  file: File;
}

interface postApiOcFileUploadOssRequest {
  fileUploadOssDto: 阿里云文件上传;
}

interface postApiOcInsidelinkAddRequest {
  insideLinkDTO: InsideLinkDTO;
}

interface getApiOcInsidelinkChecknamerepeatRequest {
  id?: number;
  name: string;
}

interface getApiOcInsidelinkDataDownloadRequest {
  current?: number;
  isMatched?: boolean;
  keyword?: string;
  offset?: number;
  pageId?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  url?: string;
}

interface getApiOcInsidelinkPageRequest {
  current?: number;
  isMatched?: boolean;
  keyword?: string;
  offset?: number;
  pageId?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  url?: string;
}

interface putApiOcInsidelinkUpdateRequest {
  insideLinkDTO: InsideLinkDTO;
}

interface postApiOcInsidelinkUploadRequest {
  file: File;
}

interface postApiOcLibraryAddRequest {
  libraryDTO: LibraryDTO;
}

interface getApiOcLibraryCheckNameRequest {
  name: string;
}

interface getApiOcLibraryPageRequest {
  current?: number;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
}

interface putApiOcLibraryUpdateRequest {
  libraryDTO: LibraryDTO;
}

interface postApiOcMaterialDigestRequest {
  digestSaveDTO: 添加文摘;
}

interface putApiOcMaterialDigestRequest {
  digestSaveDTO: 添加文摘;
}

interface getApiOcMaterialDigestPageRequest {
  current?: number;
  endTime?: number;
  materialName?: string;
  materialType?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
  tagId?: number;
}

interface postApiOcMaterialMediaRequest {
  materialMediaSaveDTO: 素材多媒体保存入参;
}

interface putApiOcMaterialMediaRequest {
  materialMediaSaveDTO: 素材多媒体保存入参;
}

interface deleteApiOcMaterialMediaRequest {
  materialMediaDTO: 素材多媒体公共参数;
}

interface getApiOcMaterialMediaPageRequest {
  current?: number;
  endTime?: number;
  materialName?: string;
  materialType?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
  tagId?: number;
}

interface postApiOcMobilelinkAddRequest {
  mobileLinkDTO: MobileLinkDTO;
}

interface getApiOcMobilelinkChecknamerepeatRequest {
  id?: number;
  name: string;
}

interface getApiOcMobilelinkPageRequest {
  current?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  platform?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  state?: number;
  url?: string;
}

interface putApiOcMobilelinkUpdateRequest {
  mobileLinkDTO: MobileLinkDTO;
}

interface postApiOcMobilelinkUploadRequest {
  file: File;
}

interface postApiOcPclinkAddRequest {
  pcLinkDTO: PCLinkDTO;
}

interface getApiOcPclinkChecknamerepeatRequest {
  id?: number;
  name: string;
}

interface getApiOcPclinkPageRequest {
  current?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  state?: number;
  url?: string;
}

interface putApiOcPclinkUpdateRequest {
  pcLinkDTO: PCLinkDTO;
}

interface postApiOcPclinkUploadRequest {
  file: File;
}

interface postApiOcPoCategoryRequest {
  CategorySaveDTO: 分类管理保存入参;
}

interface putApiOcPoCategoryRequest {
  CategorySaveDTO: 分类管理保存入参;
}

interface getApiOcPoCategoryCheckNameRequest {
  categoryName: string;
  modelType: string;
}

interface postApiOcPoCrowdcontentRequest {
  crowdContentSaveDTO: 保险攻略新增入参;
}

interface getApiOcPoCrowdcontentCheckoccupyRequest {
  bizId?: number;
  bizType?: string;
}

interface getApiOcPoCrowdcontentPageRequest {
  contentType?: string;
  crowdId?: number;
  current?: number;
  endTime?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
}

interface postApiOcPoEncyclopediaRequest {
  encyclopediaSaveDTO: 百科词典保存入参;
}

interface putApiOcPoEncyclopediaRequest {
  encyclopediaSaveDTO: 百科词典保存入参;
}

interface getApiOcPoEncyclopediaCheckNameRequest {
  encyclopediaName: string;
}

interface getApiOcPoEncyclopediaPageRequest {
  categoryId?: number;
  current?: number;
  endTime?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
  state?: number;
}

interface getApiOcPoGoodsPageRequest {
  current?: number;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  title?: string;
}

interface postApiOcPoGuideRequest {
  guideDTO: GuideSaveDTO;
}

interface putApiOcPoGuideRequest {
  guideDTO: GuideSaveDTO;
}

interface getApiOcPoGuidePageRequest {
  categoryId?: number;
  current?: number;
  endCreateTime?: number;
  guideTitle?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startCreateTime?: number;
  state?: boolean;
}

interface postApiOcPoKnowledgeRequest {
  knowledgePageSaveDTO: KnowledgeSaveDTO;
}

interface putApiOcPoKnowledgeRequest {
  knowledgePageSaveDTO: KnowledgeSaveDTO;
}

interface getApiOcPoKnowledgePageRequest {
  authorId?: number;
  cityCode?: string;
  contentType: string;
  current?: number;
  endPublishTime?: number;
  hasRecommendHeadline?: boolean;
  hasRecommendHomePage?: boolean;
  hasRecommendTopic?: boolean;
  offset?: number;
  pageSize?: number;
  productMergeType?: number;
  provinceCode?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startPublishTime?: number;
  subTopicId?: string;
  tagId?: string;
  title?: string;
  topicId?: string;
}

interface postApiOcPoQuestionRequest {
  questionSaveDTO: 问答管理保存入参;
}

interface putApiOcPoQuestionRequest {
  questionSaveDTO: 问答管理保存入参;
}

interface getApiOcPoQuestionCheckoccupyRequest {
  bizId?: number;
  bizType?: string;
}

interface getApiOcPoQuestionPageRequest {
  categoryId?: number;
  current?: number;
  endTime?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startTime?: number;
  state?: number;
}

interface getApiOcPublishDetailRequest {
  bizId?: number;
  bizType?: string;
}

interface postApiOcQuestionAddRequest {
  questionDTO: QuestionDTO;
}

interface putApiOcQuestionChangestateRequest {
  questionDTO: QuestionDTO;
}

interface getApiOcQuestionPageRequest {
  authorId?: number;
  bizName?: string;
  bizStatus?: number;
  current?: number;
  endCreateTime?: number;
  endUpdateTime?: number;
  isDraft?: boolean;
  offset?: number;
  pageSize?: number;
  platformSource?: string;
  purpose?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startCreateTime?: number;
  startUpdateTime?: number;
  tagId?: number;
}

interface putApiOcQuestionUpdateRequest {
  questionDTO: QuestionDTO;
}

interface postApiOcRemarkAddreplyRequest {
  replyMessageDTO: ReplyMessageDTO;
}

interface putApiOcRemarkChangestateRequest {
  id: number;
  isTop?: boolean;
  state?: number;
}

interface getApiOcRemarkPageRequest {
  createEndTime?: number;
  createStartTime?: number;
  current?: number;
  isReplied?: boolean;
  isTop?: boolean;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  state?: number;
}

interface postApiOcSensitiveWordAddRequest {
  sensitiveWordDTO: SensitiveWordPageDTO;
}

interface getApiOcSensitiveWordCheckNameRequest {
  libraryId: number;
  name: string;
}

interface getApiOcSensitiveWordPageRequest {
  current?: number;
  id?: number;
  keywords?: string[];
  libraryId?: number;
  offset?: number;
  pageSize?: number;
  riskLevel?: string;
  rule?: string;
  searchWord?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
}

interface putApiOcSensitiveWordUpdateRequest {
  sensitiveWordDTO: SensitiveWordPageDTO;
}

interface postApiOcTagCategoryRequest {
  tagGroupCategory: TagGroupCategoryDTO;
}

interface putApiOcTagCategoryRequest {
  tagGroupCategory: TagGroupCategoryDTO;
}

interface getApiOcTagCategoryAllRequest {
  groupCategoryName?: string;
}

interface postApiOcTagGroupRequest {
  tagGroupDTOS: TagGroupDTO;
}

interface putApiOcTagGroupRequest {
  tagGroupDTOS: TagGroupDTO;
}

interface getApiOcTagGroupPageRequest {
  categoryId?: number;
  current?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
}

interface getApiOcTagLikeTagsRequest {
  tagName?: string;
}

interface postApiOcTemplateRequest {
  articleTemplateSaveDTO: ArticleTemplateSaveDTO;
}

interface getApiOcTemplatePageRequest {
  authorId?: number;
  bizName?: string;
  bizStatus?: number;
  bizType?: string;
  contentIds?: number[];
  current?: number;
  endCreateTime?: number;
  endUpdateTime?: number;
  isDraft?: boolean;
  offset?: number;
  pageSize?: number;
  platformSource?: string;
  purpose?: string;
  sorts[0].hasAsc?: boolean;
  sorts[0].sortField?: string;
  startCreateTime?: number;
  startUpdateTime?: number;
  tagId?: number;
  tagsId?: number[];
}

interface postApiOcUploadRequest {
  file?: File;
}

export async function postApiOcAuditFlow(data: postApiOcAuditFlowRequest){
  return request<Result<审核流程>>(`/api/oc/audit/flow`, {
    method: 'post',
    data,
  })
}

export async function putApiOcAuditFlow(data: putApiOcAuditFlowRequest){
  return request<Result<void>>(`/api/oc/audit/flow`, {
    method: 'put',
    data,
  })
}

export async function getApiOcAuditFlowLabour(){
  return request<Result<Array<人工审核流程>>>(`/api/oc/audit/flow/labour`, {
    method: 'get',
  })
}

export async function getApiOcAuditFlowPage(params: getApiOcAuditFlowPageRequest){
  return request<Result<PageInfo<审核流程>>>(`/api/oc/audit/flow/page`, {
    method: 'get',
    params,
  })
}

export async function getApiOcAuditFlowId(id: number){
  return request<Result<审核流程>>(`/api/oc/audit/flow/${id}`, {
    method: 'get',
  })
}

export async function deleteApiOcAuditFlowId(id: number){
  return request<Result<void>>(`/api/oc/audit/flow/${id}`, {
    method: 'delete',
  })
}

export async function getApiOcAuditRecordPage(params: getApiOcAuditRecordPageRequest){
  return request<Result<PageInfo<审核记录返回参数>>>(`/api/oc/audit/record/page`, {
    method: 'get',
    params,
  })
}

export async function postApiOcAuthor(data: postApiOcAuthorRequest){
  return request<Result<void>>(`/api/oc/author`, {
    method: 'post',
    data,
  })
}

export async function putApiOcAuthor(data: putApiOcAuthorRequest){
  return request<Result<void>>(`/api/oc/author`, {
    method: 'put',
    data,
  })
}

export async function getApiOcAuthorCheckName(params: getApiOcAuthorCheckNameRequest){
  return request<Result<boolean>>(`/api/oc/author/checkName`, {
    method: 'get',
    params,
  })
}

export async function getApiOcAuthorList(){
  return request<Result<Array<AuthorBO>>>(`/api/oc/author/list`, {
    method: 'get',
  })
}

export async function getApiOcAuthorPage(params: getApiOcAuthorPageRequest){
  return request<Result<PageInfo<AuthorPageBO>>>(`/api/oc/author/page`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcAuthorId(id: number){
  return request<Result<void>>(`/api/oc/author/${id}`, {
    method: 'delete',
  })
}

export async function postApiOcContentArticle(data: postApiOcContentArticleRequest){
  return request<Result<number>>(`/api/oc/content/article`, {
    method: 'post',
    data,
  })
}

export async function getApiOcContentArticleDetailId(id: number){
  return request<Result<ContentArticleBO>>(`/api/oc/content/article/detail/${id}`, {
    method: 'get',
  })
}

export async function getApiOcContentArticlePage(params: getApiOcContentArticlePageRequest){
  return request<Result<PageInfo<ContentPageBO>>>(`/api/oc/content/article/page`, {
    method: 'get',
    params,
  })
}

export async function getApiOcContentArticlePublishedPage(params: getApiOcContentArticlePublishedPageRequest){
  return request<Result<PageInfo<ContentPageBO>>>(`/api/oc/content/article/published/page`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcContentArticleIds(ids: string){
  return request<Result<boolean>>(`/api/oc/content/article/${ids}`, {
    method: 'delete',
  })
}

export async function postApiOcContentMedia(data: postApiOcContentMediaRequest){
  return request<Result<number>>(`/api/oc/content/media`, {
    method: 'post',
    data,
  })
}

export async function putApiOcContentMedia(data: putApiOcContentMediaRequest){
  return request<Result<number>>(`/api/oc/content/media`, {
    method: 'put',
    data,
  })
}

export async function deleteApiOcContentMedia(data: deleteApiOcContentMediaRequest){
  return request<Result<void>>(`/api/oc/content/media`, {
    method: 'delete',
    data,
  })
}

export async function getApiOcContentMediaDetail(params: getApiOcContentMediaDetailRequest){
  return request<Result<内容多媒体详情>>(`/api/oc/content/media/detail`, {
    method: 'get',
    params,
  })
}

export async function getApiOcContentMediaPage(params: getApiOcContentMediaPageRequest){
  return request<Result<PageInfo<ContentPageBO>>>(`/api/oc/content/media/page`, {
    method: 'get',
    params,
  })
}

export async function getApiOcContentOperationPage(params: getApiOcContentOperationPageRequest){
  return request<Result<PageInfo<ContentOperationBO>>>(`/api/oc/content/operation/page`, {
    method: 'get',
    params,
  })
}

export async function postApiOcContentPublish(data: postApiOcContentPublishRequest){
  return request<Result<void>>(`/api/oc/content/publish`, {
    method: 'post',
    data,
  })
}

export async function postApiOcContentPutaway(data: postApiOcContentPutawayRequest){
  return request<Result<void>>(`/api/oc/content/put-away`, {
    method: 'post',
    data,
  })
}

export async function postApiOcContentSoldout(data: postApiOcContentSoldoutRequest){
  return request<Result<void>>(`/api/oc/content/sold-out`, {
    method: 'post',
    data,
  })
}

export async function postApiOcFileBatchupload(){
  return request<Result<Array<FileInfoBo>>>(`/api/oc/file/batch-upload`, {
    method: 'post',
  })
}

export async function getApiOcFileTemporaryAccesskey(){
  return request<Result<阿里云文件上传临时验证>>(`/api/oc/file/temporary/access-key`, {
    method: 'get',
  })
}

export async function postApiOcFileUpload(data: postApiOcFileUploadRequest){
  return request<Result<FileInfoBo>>(`/api/oc/file/upload`, {
    method: 'post',
    data,
  })
}

export async function postApiOcFileUploadOss(data: postApiOcFileUploadOssRequest){
  return request<Result<FileUploadOssBO>>(`/api/oc/file/upload/oss`, {
    method: 'post',
    data,
  })
}

export async function postApiOcInsidelinkAdd(data: postApiOcInsidelinkAddRequest){
  return request<Result<number>>(`/api/oc/inside-link/add`, {
    method: 'post',
    data,
  })
}

export async function getApiOcInsidelinkChecknamerepeat(params: getApiOcInsidelinkChecknamerepeatRequest){
  return request<Result<boolean>>(`/api/oc/inside-link/check-name-repeat`, {
    method: 'get',
    params,
  })
}

export async function getApiOcInsidelinkDataDownload(params: getApiOcInsidelinkDataDownloadRequest){
  return request<>(`/api/oc/inside-link/data/download`, {
    method: 'get',
    params,
  })
}

export async function getApiOcInsidelinkDownload(){
  return request<>(`/api/oc/inside-link/download`, {
    method: 'get',
  })
}

export async function getApiOcInsidelinkPage(params: getApiOcInsidelinkPageRequest){
  return request<Result<PageInfo<InsideLinkBO>>>(`/api/oc/inside-link/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcInsidelinkUpdate(data: putApiOcInsidelinkUpdateRequest){
  return request<Result<number>>(`/api/oc/inside-link/update`, {
    method: 'put',
    data,
  })
}

export async function postApiOcInsidelinkUpload(data: postApiOcInsidelinkUploadRequest){
  return request<Result<number>>(`/api/oc/inside-link/upload`, {
    method: 'post',
    data,
  })
}

export async function deleteApiOcInsidelinkIds(ids: string){
  return request<Result<boolean>>(`/api/oc/inside-link/${ids}`, {
    method: 'delete',
  })
}

export async function getApiOcInsidelinkId(id: number){
  return request<Result<InsideLinkBO>>(`/api/oc/inside-link/${id}`, {
    method: 'get',
  })
}

export async function postApiOcLibraryAdd(data: postApiOcLibraryAddRequest){
  return request<Result<number>>(`/api/oc/library/add`, {
    method: 'post',
    data,
  })
}

export async function getApiOcLibraryCheckName(params: getApiOcLibraryCheckNameRequest){
  return request<Result<boolean>>(`/api/oc/library/checkName`, {
    method: 'get',
    params,
  })
}

export async function getApiOcLibraryPage(params: getApiOcLibraryPageRequest){
  return request<Result<PageInfo<LibraryBO>>>(`/api/oc/library/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcLibraryUpdate(data: putApiOcLibraryUpdateRequest){
  return request<Result<boolean>>(`/api/oc/library/update`, {
    method: 'put',
    data,
  })
}

export async function deleteApiOcLibraryIds(ids: string){
  return request<Result<boolean>>(`/api/oc/library/${ids}`, {
    method: 'delete',
  })
}

export async function postApiOcMaterialDigest(data: postApiOcMaterialDigestRequest){
  return request<Result<boolean>>(`/api/oc/material/digest`, {
    method: 'post',
    data,
  })
}

export async function putApiOcMaterialDigest(data: putApiOcMaterialDigestRequest){
  return request<Result<boolean>>(`/api/oc/material/digest`, {
    method: 'put',
    data,
  })
}

export async function getApiOcMaterialDigestPage(params: getApiOcMaterialDigestPageRequest){
  return request<Result<PageInfo<ArticleBO>>>(`/api/oc/material/digest/page`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcMaterialDigestIds(ids: string){
  return request<Result<boolean>>(`/api/oc/material/digest/${ids}`, {
    method: 'delete',
  })
}

export async function postApiOcMaterialMedia(data: postApiOcMaterialMediaRequest){
  return request<Result<void>>(`/api/oc/material/media`, {
    method: 'post',
    data,
  })
}

export async function putApiOcMaterialMedia(data: putApiOcMaterialMediaRequest){
  return request<Result<void>>(`/api/oc/material/media`, {
    method: 'put',
    data,
  })
}

export async function deleteApiOcMaterialMedia(data: deleteApiOcMaterialMediaRequest){
  return request<Result<void>>(`/api/oc/material/media`, {
    method: 'delete',
    data,
  })
}

export async function getApiOcMaterialMediaPage(params: getApiOcMaterialMediaPageRequest){
  return request<Result<PageInfo<MaterialMediaPageBO>>>(`/api/oc/material/media/page`, {
    method: 'get',
    params,
  })
}

export async function getApiOcMaterialMediaRandomNumber(number: number){
  return request<Result<Array<FileShortBO>>>(`/api/oc/material/media/random/${number}`, {
    method: 'get',
  })
}

export async function postApiOcMobilelinkAdd(data: postApiOcMobilelinkAddRequest){
  return request<Result<number>>(`/api/oc/mobile-link/add`, {
    method: 'post',
    data,
  })
}

export async function getApiOcMobilelinkChecknamerepeat(params: getApiOcMobilelinkChecknamerepeatRequest){
  return request<Result<boolean>>(`/api/oc/mobile-link/check-name-repeat`, {
    method: 'get',
    params,
  })
}

export async function getApiOcMobilelinkDownload(){
  return request<>(`/api/oc/mobile-link/download`, {
    method: 'get',
  })
}

export async function getApiOcMobilelinkPage(params: getApiOcMobilelinkPageRequest){
  return request<Result<PageInfo<MobileLinkBO>>>(`/api/oc/mobile-link/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcMobilelinkUpdate(data: putApiOcMobilelinkUpdateRequest){
  return request<Result<number>>(`/api/oc/mobile-link/update`, {
    method: 'put',
    data,
  })
}

export async function postApiOcMobilelinkUpload(data: postApiOcMobilelinkUploadRequest){
  return request<Result<number>>(`/api/oc/mobile-link/upload`, {
    method: 'post',
    data,
  })
}

export async function deleteApiOcMobilelinkIds(ids: string){
  return request<Result<boolean>>(`/api/oc/mobile-link/${ids}`, {
    method: 'delete',
  })
}

export async function getApiOcMobilelinkId(id: number){
  return request<Result<MobileLinkBO>>(`/api/oc/mobile-link/${id}`, {
    method: 'get',
  })
}

export async function postApiOcPclinkAdd(data: postApiOcPclinkAddRequest){
  return request<Result<number>>(`/api/oc/pc-link/add`, {
    method: 'post',
    data,
  })
}

export async function getApiOcPclinkChecknamerepeat(params: getApiOcPclinkChecknamerepeatRequest){
  return request<Result<boolean>>(`/api/oc/pc-link/check-name-repeat`, {
    method: 'get',
    params,
  })
}

export async function getApiOcPclinkDownload(){
  return request<>(`/api/oc/pc-link/download`, {
    method: 'get',
  })
}

export async function getApiOcPclinkPage(params: getApiOcPclinkPageRequest){
  return request<Result<PageInfo<PCLinkBO>>>(`/api/oc/pc-link/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcPclinkUpdate(data: putApiOcPclinkUpdateRequest){
  return request<Result<number>>(`/api/oc/pc-link/update`, {
    method: 'put',
    data,
  })
}

export async function postApiOcPclinkUpload(data: postApiOcPclinkUploadRequest){
  return request<Result<number>>(`/api/oc/pc-link/upload`, {
    method: 'post',
    data,
  })
}

export async function deleteApiOcPclinkIds(ids: string){
  return request<Result<boolean>>(`/api/oc/pc-link/${ids}`, {
    method: 'delete',
  })
}

export async function getApiOcPclinkId(id: number){
  return request<Result<PCLinkBO>>(`/api/oc/pc-link/${id}`, {
    method: 'get',
  })
}

export async function postApiOcPoCategory(data: postApiOcPoCategoryRequest){
  return request<Result<number>>(`/api/oc/po/category`, {
    method: 'post',
    data,
  })
}

export async function putApiOcPoCategory(data: putApiOcPoCategoryRequest){
  return request<Result<number>>(`/api/oc/po/category`, {
    method: 'put',
    data,
  })
}

export async function getApiOcPoCategoryCheckName(params: getApiOcPoCategoryCheckNameRequest){
  return request<Result<boolean>>(`/api/oc/po/category/checkName`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcPoCategoryId(id: number){
  return request<Result<void>>(`/api/oc/po/category/${id}`, {
    method: 'delete',
  })
}

export async function getApiOcPoCategoryModelType(modelType: string){
  return request<Result<Array<CategoryBO>>>(`/api/oc/po/category/${modelType}`, {
    method: 'get',
  })
}

export async function postApiOcPoCrowdcontent(data: postApiOcPoCrowdcontentRequest){
  return request<Result<number>>(`/api/oc/po/crowd-content`, {
    method: 'post',
    data,
  })
}

export async function getApiOcPoCrowdcontentCheckoccupy(params: getApiOcPoCrowdcontentCheckoccupyRequest){
  return request<Result<boolean>>(`/api/oc/po/crowd-content/check-occupy`, {
    method: 'get',
    params,
  })
}

export async function getApiOcPoCrowdcontentListcrowd(){
  return request<Result<Array<CrowdInfoBO>>>(`/api/oc/po/crowd-content/list-crowd`, {
    method: 'get',
  })
}

export async function getApiOcPoCrowdcontentPage(params: getApiOcPoCrowdcontentPageRequest){
  return request<Result<PageInfo<CrowdContentPageBO>>>(`/api/oc/po/crowd-content/page`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcPoCrowdcontentId(id: number){
  return request<Result<void>>(`/api/oc/po/crowd-content/${id}`, {
    method: 'delete',
  })
}

export async function postApiOcPoEncyclopedia(data: postApiOcPoEncyclopediaRequest){
  return request<Result<number>>(`/api/oc/po/encyclopedia`, {
    method: 'post',
    data,
  })
}

export async function putApiOcPoEncyclopedia(data: putApiOcPoEncyclopediaRequest){
  return request<Result<number>>(`/api/oc/po/encyclopedia`, {
    method: 'put',
    data,
  })
}

export async function getApiOcPoEncyclopediaCheckName(params: getApiOcPoEncyclopediaCheckNameRequest){
  return request<Result<boolean>>(`/api/oc/po/encyclopedia/checkName`, {
    method: 'get',
    params,
  })
}

export async function getApiOcPoEncyclopediaDetailId(id: number){
  return request<Result<EncyclopediaDetailBO>>(`/api/oc/po/encyclopedia/detail/${id}`, {
    method: 'get',
  })
}

export async function getApiOcPoEncyclopediaPage(params: getApiOcPoEncyclopediaPageRequest){
  return request<Result<PageInfo<EncyclopediaPageBO>>>(`/api/oc/po/encyclopedia/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcPoEncyclopediaPutawayId(id: number){
  return request<Result<void>>(`/api/oc/po/encyclopedia/put-away/${id}`, {
    method: 'put',
  })
}

export async function putApiOcPoEncyclopediaSoldoutId(id: number){
  return request<Result<void>>(`/api/oc/po/encyclopedia/sold-out/${id}`, {
    method: 'put',
  })
}

export async function getApiOcPoGoodsPage(params: getApiOcPoGoodsPageRequest){
  return request<Result<PageInfo<GoodsPageBO>>>(`/api/oc/po/goods/page`, {
    method: 'get',
    params,
  })
}

export async function postApiOcPoGuide(data: postApiOcPoGuideRequest){
  return request<Result<number>>(`/api/oc/po/guide`, {
    method: 'post',
    data,
  })
}

export async function putApiOcPoGuide(data: putApiOcPoGuideRequest){
  return request<Result<number>>(`/api/oc/po/guide`, {
    method: 'put',
    data,
  })
}

export async function getApiOcPoGuideDetailId(id: number){
  return request<Result<GuideDetailBO>>(`/api/oc/po/guide/detail/${id}`, {
    method: 'get',
  })
}

export async function getApiOcPoGuidePage(params: getApiOcPoGuidePageRequest){
  return request<Result<PageInfo<GuidePageBO>>>(`/api/oc/po/guide/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcPoGuideEnabledId(enabled: boolean, id: number){
  return request<Result<void>>(`/api/oc/po/guide/${enabled}/${id}`, {
    method: 'put',
  })
}

export async function deleteApiOcPoGuideId(id: number){
  return request<Result<void>>(`/api/oc/po/guide/${id}`, {
    method: 'delete',
  })
}

export async function postApiOcPoKnowledge(data: postApiOcPoKnowledgeRequest){
  return request<Result<number>>(`/api/oc/po/knowledge`, {
    method: 'post',
    data,
  })
}

export async function putApiOcPoKnowledge(data: putApiOcPoKnowledgeRequest){
  return request<Result<number>>(`/api/oc/po/knowledge`, {
    method: 'put',
    data,
  })
}

export async function getApiOcPoKnowledgeCheckContentTypeContentId(contentId: number, contentType: string){
  return request<Result<boolean>>(`/api/oc/po/knowledge/check/${contentType}/${contentId}`, {
    method: 'get',
  })
}

export async function getApiOcPoKnowledgeDetailId(id: number){
  return request<Result<KnowledgeDetailBO>>(`/api/oc/po/knowledge/detail/${id}`, {
    method: 'get',
  })
}

export async function getApiOcPoKnowledgePage(params: getApiOcPoKnowledgePageRequest){
  return request<Result<PageInfo<KnowledgePageBO>>>(`/api/oc/po/knowledge/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcPoKnowledgeEnabledId(enabled: boolean, id: number){
  return request<Result<void>>(`/api/oc/po/knowledge/${enabled}/${id}`, {
    method: 'put',
  })
}

export async function postApiOcPoQuestion(data: postApiOcPoQuestionRequest){
  return request<Result<number>>(`/api/oc/po/question`, {
    method: 'post',
    data,
  })
}

export async function putApiOcPoQuestion(data: putApiOcPoQuestionRequest){
  return request<Result<number>>(`/api/oc/po/question`, {
    method: 'put',
    data,
  })
}

export async function getApiOcPoQuestionCheckoccupy(params: getApiOcPoQuestionCheckoccupyRequest){
  return request<Result<boolean>>(`/api/oc/po/question/check-occupy`, {
    method: 'get',
    params,
  })
}

export async function getApiOcPoQuestionDetailId(id: number){
  return request<Result<问答管理详情>>(`/api/oc/po/question/detail/${id}`, {
    method: 'get',
  })
}

export async function getApiOcPoQuestionPage(params: getApiOcPoQuestionPageRequest){
  return request<Result<PageInfo<QuestionPageBO>>>(`/api/oc/po/question/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcPoQuestionPutawayId(id: number){
  return request<Result<void>>(`/api/oc/po/question/put-away/${id}`, {
    method: 'put',
  })
}

export async function putApiOcPoQuestionSoldoutId(id: number){
  return request<Result<void>>(`/api/oc/po/question/sold-out/${id}`, {
    method: 'put',
  })
}

export async function getApiOcPublishDetail(params: getApiOcPublishDetailRequest){
  return request<Result<发布详情>>(`/api/oc/publish/detail`, {
    method: 'get',
    params,
  })
}

export async function postApiOcQuestionAdd(data: postApiOcQuestionAddRequest){
  return request<Result<number>>(`/api/oc/question/add`, {
    method: 'post',
    data,
  })
}

export async function putApiOcQuestionChangestate(data: putApiOcQuestionChangestateRequest){
  return request<Result<boolean>>(`/api/oc/question/change-state`, {
    method: 'put',
    data,
  })
}

export async function getApiOcQuestionPage(params: getApiOcQuestionPageRequest){
  return request<Result<PageInfo<ContentPageBO>>>(`/api/oc/question/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcQuestionUpdate(data: putApiOcQuestionUpdateRequest){
  return request<Result<boolean>>(`/api/oc/question/update`, {
    method: 'put',
    data,
  })
}

export async function deleteApiOcQuestionIds(ids: string){
  return request<Result<boolean>>(`/api/oc/question/${ids}`, {
    method: 'delete',
  })
}

export async function getApiOcQuestionId(id: number){
  return request<Result<QuestionBO>>(`/api/oc/question/${id}`, {
    method: 'get',
  })
}

export async function postApiOcRemarkAddreply(data: postApiOcRemarkAddreplyRequest){
  return request<Result<number>>(`/api/oc/remark/add-reply`, {
    method: 'post',
    data,
  })
}

export async function putApiOcRemarkChangestate(data: putApiOcRemarkChangestateRequest){
  return request<Result<boolean>>(`/api/oc/remark/change-state`, {
    method: 'put',
    data,
  })
}

export async function getApiOcRemarkPage(params: getApiOcRemarkPageRequest){
  return request<Result<PageInfo<RemarkBO>>>(`/api/oc/remark/page`, {
    method: 'get',
    params,
  })
}

export async function postApiOcSensitiveWordAdd(data: postApiOcSensitiveWordAddRequest){
  return request<Result<number>>(`/api/oc/sensitiveWord/add`, {
    method: 'post',
    data,
  })
}

export async function getApiOcSensitiveWordCheckName(params: getApiOcSensitiveWordCheckNameRequest){
  return request<Result<boolean>>(`/api/oc/sensitiveWord/checkName`, {
    method: 'get',
    params,
  })
}

export async function getApiOcSensitiveWordPage(params: getApiOcSensitiveWordPageRequest){
  return request<Result<PageInfo<SensitiveWordBO>>>(`/api/oc/sensitiveWord/page`, {
    method: 'get',
    params,
  })
}

export async function putApiOcSensitiveWordUpdate(data: putApiOcSensitiveWordUpdateRequest){
  return request<Result<boolean>>(`/api/oc/sensitiveWord/update`, {
    method: 'put',
    data,
  })
}

export async function deleteApiOcSensitiveWordIds(ids: string){
  return request<Result<boolean>>(`/api/oc/sensitiveWord/${ids}`, {
    method: 'delete',
  })
}

export async function getApiOcSysDictionaryCity(){
  return request<Result<Array<DictionaryTypeBO>>>(`/api/oc/sys/dictionary/city`, {
    method: 'get',
  })
}

export async function getApiOcSysDictionaryPagetype(){
  return request<Result<Array<DictionaryTypeBO>>>(`/api/oc/sys/dictionary/page-type`, {
    method: 'get',
  })
}

export async function getApiOcSysDictionaryPlatform(){
  return request<Result<Array<DictionaryTypeBO>>>(`/api/oc/sys/dictionary/platform`, {
    method: 'get',
  })
}

export async function getApiOcSysDictionaryTopic(){
  return request<Result<Array<DictionaryTypeBO>>>(`/api/oc/sys/dictionary/topic`, {
    method: 'get',
  })
}

export async function getApiOcTagAllTree(){
  return request<Result<Array<标签组分类>>>(`/api/oc/tag/all/tree`, {
    method: 'get',
  })
}

export async function postApiOcTagCategory(data: postApiOcTagCategoryRequest){
  return request<Result<boolean>>(`/api/oc/tag/category`, {
    method: 'post',
    data,
  })
}

export async function putApiOcTagCategory(data: putApiOcTagCategoryRequest){
  return request<Result<boolean>>(`/api/oc/tag/category`, {
    method: 'put',
    data,
  })
}

export async function getApiOcTagCategoryAll(params: getApiOcTagCategoryAllRequest){
  return request<Result<Array<标签组分类>>>(`/api/oc/tag/category/all`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcTagCategoryIds(ids: string){
  return request<Result<boolean>>(`/api/oc/tag/category/${ids}`, {
    method: 'delete',
  })
}

export async function postApiOcTagGroup(data: postApiOcTagGroupRequest){
  return request<Result<boolean>>(`/api/oc/tag/group`, {
    method: 'post',
    data,
  })
}

export async function putApiOcTagGroup(data: putApiOcTagGroupRequest){
  return request<Result<boolean>>(`/api/oc/tag/group`, {
    method: 'put',
    data,
  })
}

export async function getApiOcTagGroupPage(params: getApiOcTagGroupPageRequest){
  return request<Result<PageInfo<标签组>>>(`/api/oc/tag/group/page`, {
    method: 'get',
    params,
  })
}

export async function getApiOcTagGroupCategoryId(categoryId: number){
  return request<Result<Array<标签组>>>(`/api/oc/tag/group/${categoryId}`, {
    method: 'get',
  })
}

export async function getApiOcTagGroupCategoryIdGroupName(categoryId: number, groupName: string){
  return request<Result<标签组>>(`/api/oc/tag/group/${categoryId}/${groupName}`, {
    method: 'get',
  })
}

export async function deleteApiOcTagGroupIds(ids: string){
  return request<Result<boolean>>(`/api/oc/tag/group/${ids}`, {
    method: 'delete',
  })
}

export async function getApiOcTagLikeTags(params: getApiOcTagLikeTagsRequest){
  return request<Result<Array<TagBO>>>(`/api/oc/tag/like/tags`, {
    method: 'get',
    params,
  })
}

export async function postApiOcTemplate(data: postApiOcTemplateRequest){
  return request<Result<number>>(`/api/oc/template`, {
    method: 'post',
    data,
  })
}

export async function postApiOcTemplateDetailId(id: number){
  return request<Result<ContentArticleBO>>(`/api/oc/template/detail/${id}`, {
    method: 'post',
  })
}

export async function getApiOcTemplatePage(params: getApiOcTemplatePageRequest){
  return request<Result<PageInfo<ContentPageBO>>>(`/api/oc/template/page`, {
    method: 'get',
    params,
  })
}

export async function deleteApiOcTemplateIds(ids: string){
  return request<Result<void>>(`/api/oc/template/${ids}`, {
    method: 'delete',
  })
}

export async function postApiOcUpload(data: postApiOcUploadRequest){
  return request<Result<boolean>>(`/api/oc/upload`, {
    method: 'post',
    data,
  })
}

