import type { DefaultTranslationsObject, Language } from '../types.js'

export const viTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Tài khoản',
    accountOfCurrentUser: 'Tài khoản của người dùng hiện tại',
    accountVerified: 'Tài khoản đã được xác minh thành công.',
    alreadyActivated: 'Đã được kích hoạt',
    alreadyLoggedIn: 'Đã đăng nhập',
    apiKey: 'API Key',
    authenticated: 'Đã xác thực',
    backToLogin: 'Quay lại đăng nhập.',
    beginCreateFirstUser: 'Để bắt đầu, hãy tạo người dùng đầu tiên.',
    changePassword: 'Đổi mật khẩu',
    checkYourEmailForPasswordReset: 'Hãy kiểm tra email của bạn để lấy đường dẫn tạo lại mật khẩu.',
    confirmGeneration: 'Xác nhận, tạo API Key',
    confirmPassword: 'Xác nhận mật khẩu',
    createFirstUser: 'Tạo người dùng đầu tiên',
    emailNotValid: 'Email không chính xác',
    emailOrUsername: 'Email hoặc Tên tài khoản',
    emailSent: 'Email đã được gửi',
    emailVerified: 'Email đã được xác minh thành công.',
    enableAPIKey: 'Kích hoạt API Key',
    failedToUnlock: 'Mở khóa thất bại',
    forceUnlock: 'Mở khóa tài khoản',
    forgotPassword: 'Quên mật khẩu',
    forgotPasswordEmailInstructions: 'Nhập email của bạn để nhận hướng dẫn tạo lại mật khẩu.',
    forgotPasswordQuestion: 'Quên mật khẩu?',
    forgotPasswordUsernameInstructions:
      'Vui lòng nhập tên người dùng của bạn bên dưới. Hướng dẫn về cách đặt lại mật khẩu của bạn sẽ được gửi đến địa chỉ email liên kết với tên người dùng của bạn.',
    generate: 'Tạo',
    generateNewAPIKey: 'Tạo API Key mới',
    generatingNewAPIKeyWillInvalidate:
      'Việc tạo API Key mới sẽ <1>vô hiệu hóa</1> API Key cũ. Bạn có muốn tiếp tục không?',
    lockUntil: 'Khóa lại cho tới thời điểm sau',
    logBackIn: 'Đăng nhập lại',
    logOut: 'Đăng xuất',
    loggedIn:
      'Để đăng nhập dưới tên người dùng khác, bạn phải <0>đăng xuất</0> người dùng hiện tại.',
    loggedInChangePassword: 'Để đổi mật khẩu, hãy truy cập cài đặt <0>tài khoản</0>.',
    loggedOutInactivity: 'Bạn đã tự động đăng xuất sau một khoản thời gian dài không thao tác.',
    loggedOutSuccessfully: 'Đăng xuất thành công.',
    loggingOut: 'Đang đăng xuất...',
    login: 'Đăng nhập',
    loginAttempts: 'Lần đăng nhập',
    loginUser: 'Đăng nhập người dùng',
    loginWithAnotherUser:
      'Để đăng nhập dưới tên người dùng khác, bạn phải <0>đăng xuất</0> người dùng hiện tại.',
    logout: 'Đăng xuất',
    logoutSuccessful: 'Đăng xuất thành công.',
    logoutUser: 'Đăng xuất người dùng',
    newAPIKeyGenerated: 'API Key mới đã được tạo',
    newAccountCreated:
      'Một tài khoản mới đã được tạo cho bạn. Tài khoản này được dùng để truy cập <a href="{{serverURL}}">{{serverURL}}</a> Hãy nhấp chuột hoặc sao chép đường dẫn sau vào trình duyệt của bạn để xác thực email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Sau khi email được xác thực, bạn sẽ có thể đăng nhập.',
    newPassword: 'Mật khẩu mới',
    passed: 'Xác thực thành công',
    passwordResetSuccessfully: 'Đặt lại mật khẩu thành công.',
    resetPassword: 'Tạo lại mật khẩu',
    resetPasswordExpiration: 'Hạn tạo lại mật khẩu ',
    resetPasswordToken: 'Tạo lại token cho mật khẩu',
    resetYourPassword: 'Tạo lại mật khẩu',
    stayLoggedIn: 'Duy trì đăng nhập',
    successfullyRegisteredFirstUser: 'Đã đăng ký thành công người dùng đầu tiên.',
    successfullyUnlocked: 'Mở khóa thành công',
    tokenRefreshSuccessful: 'Làm mới token thành công.',
    unableToVerify: 'Không thể xác thực',
    username: 'Tên đăng nhập',
    usernameNotValid: 'Tên người dùng được cung cấp không hợp lệ',
    verified: 'Đã xác thực',
    verifiedSuccessfully: 'Đã xác thực thành công',
    verify: 'Tiến hành xác thực',
    verifyUser: 'Tiến hành xác thực người dùng',
    verifyYourEmail: 'Tiến hành xác thực email',
    youAreInactive:
      'Bạn đã không thao tác trong một khoảng thời gian, và sẽ bị tự động đăng xuất vì lý do bảo mật. Bạn có muốn tiếp tục phiên đăng nhập.',
    youAreReceivingResetPassword:
      'Bạn nhận được tin nhắn này vì bạn (hoặc một người nào khác) đã gửi yêu cầu thay đổi mật khẩu tài khoản của bạn. Xin hãy nhấp chuột vào đường dẫn sau, hoặc sao chép vào trình duyệt của bạn để hoàn tất quá trình:',
    youDidNotRequestPassword:
      'Nếu bạn không phải là người yêu cầu thay đổi mật khẩu, xin hãy bỏ qua tin nhắn này và mật khẩu của bạn sẽ được giữ nguyên.',
  },
  error: {
    accountAlreadyActivated: 'Lỗi - Tài khoản này đã được kích hoạt.',
    autosaving: 'Lỗi - Đã xảy ra vấn đề khi tự động sao lưu bản tài liệu này.',
    correctInvalidFields: 'Lỗi - Xin hãy sửa lại những fields không hợp lệ.',
    deletingFile: 'Lỗi - Đã xảy ra vấn đề khi xóa tệp này.',
    deletingTitle:
      'Lỗi - Đã xảy ra vấn đề khi xóa {{title}}. Hãy kiểm tra kết nối mạng và thử lại.',
    emailOrPasswordIncorrect: 'Lỗi - Email hoặc mật khẩu không chính xác.',
    followingFieldsInvalid_one: 'Lỗi - Field sau không hợp lệ:',
    followingFieldsInvalid_other: 'Lỗi - Những fields sau không hợp lệ:',
    incorrectCollection: 'Lỗi - Collection không hợp lệ.',
    invalidFileType: 'Lỗi - Định dạng tệp không hợp lệ.',
    invalidFileTypeValue: 'Lỗi - Định dạng tệp không hợp lệ: {{value}}.',
    loadingDocument: 'Lỗi - Đã xảy ra vấn để khi tải bản tài liệu với ID {{id}}.',
    localesNotSaved_one: 'Không thể lưu trữ cài đặt vùng sau đây:',
    localesNotSaved_other: 'Không thể lưu trữ các cài đặt vùng sau đây:',
    logoutFailed: 'Đăng xuất thất bại.',
    missingEmail: 'Lỗi - Thiếu email.',
    missingIDOfDocument: 'Lỗi - Thiếu ID của bản tài liệu cần cập nhật.',
    missingIDOfVersion: 'Lỗi - Thiếu ID của phiên bản.',
    missingRequiredData: 'Lỗi - Thiếu dữ liệu cần thiết.',
    noFilesUploaded: 'Lỗi - File chưa được tải lên.',
    noMatchedField: 'Lỗi - Không tìm thấy field trùng với "{{label}}".',
    noUser: 'Lỗi - Request thiếu thông tin người dùng.',
    notAllowedToAccessPage: 'Lỗi - Bạn không có quyền truy cập trang này.',
    notAllowedToPerformAction: 'Lỗi - Bạn không có quyền thực hiện lệnh này.',
    notFound: 'Lỗi - Không thể tìm thấy.',
    previewing: 'Lỗi - Đã xảy ra vấn đề khi xem trước bản tài liệu này.',
    problemUploadingFile: 'Lỗi - Đã xảy ra vấn để khi tải lên file sau.',
    tokenInvalidOrExpired: 'Lỗi - Token không hợp lệ hoặc đã hết hạn.',
    tokenNotProvided: 'Không cung cấp mã thông báo.',
    unPublishingDocument: 'Lỗi - Đã xảy ra vấn để khi ẩn bản tài liệu.',
    unableToDeleteCount: 'Không thể xóa {{count}} trong số {{total}} {{label}}.',
    unableToUpdateCount: 'Không thể cập nhật {{count}} trên {{total}} {{label}}.',
    unauthorized: 'Lỗi - Bạn cần phải đăng nhập trước khi gửi request sau.',
    unknown: 'Lỗi - Không xác định (unknown error).',
    unspecific: 'Lỗi - Đã xảy ra (unspecific error).',
    userEmailAlreadyRegistered: 'Người dùng với email đã cho đã được đăng ký.',
    userLocked: 'Lỗi- Tài khoản đã bị khóa do đăng nhập thất bại nhiều lần.',
    usernameAlreadyRegistered: 'Một người dùng với tên đăng nhập đã cho đã được đăng ký.',
    usernameOrPasswordIncorrect: 'Tên người dùng hoặc mật khẩu được cung cấp không chính xác.',
    valueMustBeUnique: 'Lỗi - Giá trị không được trùng lặp.',
    verificationTokenInvalid: 'Lỗi - Token dùng để xác thực không hợp lệ.',
  },
  fields: {
    addLabel: 'Thêm: {{label}}',
    addLink: 'Thêm liên kết',
    addNew: 'Thêm mới',
    addNewLabel: 'Thêm mới: {{label}}',
    addRelationship: 'Thêm mối quan hệ (relationship)',
    addUpload: 'Thêm tải lên (upload)',
    block: 'block',
    blockType: 'Block Type',
    blocks: 'blocks',
    chooseBetweenCustomTextOrDocument:
      'Chọn giữa nhập URL văn bản tùy chỉnh hoặc liên kết đến tài liệu khác.',
    chooseDocumentToLink: 'Chọn một tài liệu để liên kết đến',
    chooseFromExisting: 'Chọn từ thư viện',
    chooseLabel: 'Chọn: {{label}}',
    collapseAll: 'Ẩn toàn bộ',
    customURL: 'URL tùy chỉnh',
    editLabelData: 'Chỉnh sửa nội dung của: {{label}}',
    editLink: 'Chỉnh sửa liên kết',
    editRelationship: 'Chỉnh sửa mối quan hệ',
    enterURL: 'Nhập một URL',
    internalLink: 'Liên kết nội bộ',
    itemsAndMore: '{{items}} và {{count}} món nữa',
    labelRelationship: 'Mối quan hệ của {{label}} (Relationship)',
    latitude: 'Vĩ độ',
    linkType: 'Loại liên kết',
    linkedTo: 'Được nối với <0>{{label}}</0>',
    longitude: 'Kinh độ',
    newLabel: 'Tạo {{label}} mới',
    openInNewTab: 'Mở trong trang mới',
    passwordsDoNotMatch: 'Mật khẩu không trùng.',
    relatedDocument: 'bản tài liệu liên quan',
    relationTo: 'Có quan hệ với',
    removeRelationship: 'Xóa Mối quan hệ',
    removeUpload: 'Xóa bản tải lên',
    saveChanges: 'Luu thay đổi',
    searchForBlock: 'Tìm block',
    selectExistingLabel: 'Chọn một {{label}} có sẵn',
    selectFieldsToEdit: 'Chọn các trường để chỉnh sửa',
    showAll: 'Hiển thị toàn bộ',
    swapRelationship: 'Đổi quan hệ',
    swapUpload: 'Đổi bản tải lên',
    textToDisplay: 'Văn bản để hiển thị',
    toggleBlock: 'Bật/tắt block',
    uploadNewLabel: 'Tải lên bản mới: {{label}}',
  },
  general: {
    aboutToDelete: 'Chuẩn bị xóa {{label}} <1>{{title}}</1>. Bạn có muốn tiếp tục không?',
    aboutToDeleteCount_many: 'Bạn sắp xóa {{count}} {{label}}',
    aboutToDeleteCount_one: 'Bạn sắp xóa {{count}} {{label}}',
    aboutToDeleteCount_other: 'Bạn sắp xóa {{count}} {{label}}',
    addBelow: 'Thêm bên dưới',
    addFilter: 'Thêm bộ lọc',
    adminTheme: 'Giao diện bảng điều khiển',
    and: 'Và',
    anotherUserTakenOver: 'Người dùng khác đã tiếp quản việc chỉnh sửa tài liệu này.',
    applyChanges: 'Áp dụng Thay đổi',
    ascending: 'Sắp xếp theo thứ tự tăng dần',
    automatic: 'Tự động',
    backToDashboard: 'Quay lại bảng điều khiển',
    cancel: 'Hủy',
    changesNotSaved: 'Thay đổi chưa được lưu lại. Bạn sẽ mất bản chỉnh sửa nếu thoát bây giờ.',
    clearAll: undefined,
    close: 'Gần',
    collapse: 'Thu gọn',
    collections: 'Collections',
    columnToSort: 'Sắp xếp cột',
    columns: 'Hiển thị cột',
    confirm: 'Xác nhận',
    confirmDeletion: 'Xác nhận xóa',
    confirmDuplication: 'Xác nhận tạo bản sao',
    copied: 'Đâ sao chép',
    copy: 'Sao chép',
    create: 'Tạo',
    createNew: 'Tạo mới',
    createNewLabel: 'Tạo mới {{label}}',
    created: 'Đã tạo',
    createdAt: 'Ngày tạo',
    creating: 'Đang tạo',
    creatingNewLabel: 'Đang tạo mới {{label}}',
    currentlyEditing:
      'hiện đang chỉnh sửa tài liệu này. Nếu bạn tiếp quản, họ sẽ bị chặn tiếp tục chỉnh sửa và cũng có thể mất các thay đổi chưa lưu.',
    custom: 'Tùy chỉnh',
    dark: 'Nền tối',
    dashboard: 'Bảng điều khiển',
    delete: 'Xóa',
    deletedCountSuccessfully: 'Đã xóa thành công {{count}} {{label}}.',
    deletedSuccessfully: 'Đã xoá thành công.',
    deleting: 'Đang xóa...',
    depth: 'Độ sâu',
    descending: 'Xếp theo thứ tự giảm dần',
    deselectAllRows: 'Bỏ chọn tất cả các hàng',
    document: 'Tài liệu',
    documentLocked: 'Tài liệu bị khóa',
    documents: 'Tài liệu',
    duplicate: 'Tạo bản sao',
    duplicateWithoutSaving: 'Không lưu dữ liệu và tạo bản sao',
    edit: 'Chỉnh sửa',
    editLabel: 'Chỉnh sửa: {{label}}',
    editedSince: 'Được chỉnh sửa từ',
    editing: 'Đang chỉnh sửa',
    editingLabel_many: 'Đang chỉnh sửa {{count}} {{label}}',
    editingLabel_one: 'Đang chỉnh sửa {{count}} {{label}}',
    editingLabel_other: 'Đang chỉnh sửa {{count}} {{label}}',
    editingTakenOver: 'Chỉnh sửa đã được tiếp quản',
    email: 'Email',
    emailAddress: 'Địa chỉ Email',
    enterAValue: 'Nhập một giá trị',
    error: 'Lỗi',
    errors: 'Lỗi',
    fallbackToDefaultLocale: 'Ngôn ngữ mặc định',
    false: 'Sai',
    filter: 'Lọc',
    filterWhere: 'Lọc {{label}} với điều kiện:',
    filters: 'Bộ lọc',
    globals: 'Toàn thể (globals)',
    goBack: 'Quay lại',
    isEditing: 'đang chỉnh sửa',
    language: 'Ngôn ngữ',
    lastModified: 'Chỉnh sửa lần cuối vào lúc',
    leaveAnyway: 'Tiếp tục thoát',
    leaveWithoutSaving: 'Thay đổi chưa được lưu',
    light: 'Nền sáng',
    livePreview: 'Xem trước',
    loading: 'Đang tải',
    locale: 'Ngôn ngữ',
    locales: 'Khu vực',
    menu: 'Thực đơn',
    moveDown: 'Di chuyển xuống',
    moveUp: 'Di chuyển lên',
    newPassword: 'Mật khảu mới',
    next: 'Tiếp theo',
    noFiltersSet: 'Không có bộ lọc nào được áp dụng',
    noLabel: '<Không có {{label}}>',
    noOptions: 'Không có lựa chọn',
    noResults:
      'Danh sách rỗng: {{label}}. Có thể {{label}} chưa tồn tại hoặc không có dữ kiện trùng với bộ lọc hiện tại.',
    noValue: 'Không có giá trị',
    none: 'Không có',
    notFound: 'Không tìm thấy',
    nothingFound: 'Không tìm thấy',
    of: 'trong số',
    open: 'Mở',
    or: 'hoặc',
    order: 'Thứ tự',
    pageNotFound: 'Không tìm thấy trang',
    password: 'Mật khẩu',
    payloadSettings: 'Cài đặt',
    perPage: 'Hiển thị mỗi trang: {{limit}}',
    previous: 'Trước đó',
    remove: 'Loại bỏ',
    reset: 'Đặt lại',
    row: 'Hàng',
    rows: 'Những hàng',
    save: 'Luu',
    saving: 'Đang lưu...',
    searchBy: 'Tìm với {{label}}',
    selectAll: 'Chọn tất cả {{count}} {{label}}',
    selectAllRows: 'Chọn tất cả các hàng',
    selectValue: 'Chọn một giá trị',
    selectedCount: 'Đã chọn {{count}} {{label}}',
    showAllLabel: 'Hiển thị tất cả {{label}}',
    sorryNotFound: 'Xin lỗi, không có kết quả nào tương ứng với request của bạn.',
    sort: 'Sắp xếp',
    sortByLabelDirection: 'Sắp xếp theo {{label}} {{direction}}',
    stayOnThisPage: 'Ở lại trang này',
    submissionSuccessful: 'Gửi thành công.',
    submit: 'Gửi',
    submitting: 'Đang gửi...',
    success: 'Thành công',
    successfullyCreated: '{{label}} đã được tạo thành công.',
    successfullyDuplicated: '{{label}} đã được sao chép thành công.',
    takeOver: 'Tiếp quản',
    thisLanguage: 'Vietnamese (Tiếng Việt)',
    titleDeleted: '{{label}} {{title}} đã được xóa thành công.',
    true: 'Thật',
    unauthorized: 'Không có quyền truy cập.',
    unsavedChangesDuplicate: 'Bạn chưa lưu các thay đổi. Bạn có muốn tiếp tục tạo bản sao?',
    untitled: 'Chưa có tiêu đề',
    updatedAt: 'Ngày cập nhật',
    updatedCountSuccessfully: 'Đã cập nhật thành công {{count}} {{label}}.',
    updatedSuccessfully: 'Cập nhật thành công.',
    updating: 'Đang cập nhật',
    uploading: 'Đang tải lên',
    user: 'Người dùng',
    username: 'Tên đăng nhập',
    users: 'Người dùng',
    value: 'Giá trị',
    viewReadOnly: 'Xem chỉ đọc',
    welcome: 'Xin chào',
  },
  operators: {
    contains: 'có chứa',
    equals: 'bằng',
    exists: 'tồn tại',
    intersects: 'giao nhau',
    isGreaterThan: 'lớn hơn',
    isGreaterThanOrEqualTo: 'lớn hơn hoặc bằng',
    isIn: 'có trong',
    isLessThan: 'nhỏ hơn',
    isLessThanOrEqualTo: 'nhỏ hơn hoặc bằng',
    isLike: 'gần giống',
    isNotEqualTo: 'không bằng',
    isNotIn: 'không có trong',
    near: 'gần',
    within: 'trong',
  },
  upload: {
    addFile: 'Thêm tập tin',
    addFiles: 'Thêm tệp',
    bulkUpload: 'Tải lên số lượng lớn',
    crop: 'Mùa vụ',
    cropToolDescription:
      'Kéo các góc của khu vực đã chọn, vẽ một khu vực mới hoặc điều chỉnh các giá trị dưới đây.',
    dragAndDrop: 'Kéo và thả một tập tin',
    dragAndDropHere: 'hoặc kéo và thả file vào đây',
    editImage: 'Chỉnh sửa hình ảnh',
    fileName: 'Tên file',
    fileSize: 'Dung lượng file',
    fileToUpload: 'Tệp để Tải lên',
    filesToUpload: 'Tệp để Tải lên',
    focalPoint: 'Điểm trọng tâm',
    focalPointDescription:
      'Kéo điểm tiêu cực trực tiếp trên trình xem trước hoặc điều chỉnh các giá trị bên dưới.',
    height: 'Chiều cao',
    lessInfo: 'Hiển thị ít hơn',
    moreInfo: 'Thêm',
    pasteURL: 'Dán URL',
    previewSizes: 'Kích cỡ xem trước',
    selectCollectionToBrowse: 'Chọn một Collection để tìm',
    selectFile: 'Chọn một file',
    setCropArea: 'Đặt khu vực cắt',
    setFocalPoint: 'Đặt điểm tiêu điểm',
    sizes: 'Các độ phân giải',
    sizesFor: 'Kích thước cho {{label}}',
    width: 'Chiều rộng',
  },
  validation: {
    emailAddress: 'Địa chỉ email không hợp lệ.',
    enterNumber: 'Vui lòng nhập số.',
    fieldHasNo: 'Field này không có: {{label}}',
    greaterThanMax: '{{value}} lớn hơn giá trị tối đa cho phép của {{label}} là {{max}}.',
    invalidInput: 'Dữ liệu nhập vào không hợp lệ.',
    invalidSelection: 'Lựa chọn ở field này không hợp lệ.',
    invalidSelections: "'Field này có những lựa chọn không hợp lệ sau:'",
    lessThanMin: '{{value}} nhỏ hơn giá trị tối thiểu cho phép của {{label}} là {{min}}.',
    limitReached: 'Đã đạt giới hạn, chỉ có thể thêm {{max}} mục.',
    longerThanMin: 'Giá trị này cần có độ dài tối thiểu {{minLength}} ký tự.',
    notValidDate: '"{{value}}" không phải là một ngày (date) hợp lệ.',
    required: 'Field này cần được diền.',
    requiresAtLeast: 'Field này cần tối thiểu {{count}} {{label}}.',
    requiresNoMoreThan: 'Field này không thể vượt quá {{count}} {{label}}.',
    requiresTwoNumbers: 'Field này cần tối thiểu 2 chữ số.',
    shorterThanMax: 'Giá trị phải ngắn hơn hoặc bằng {{maxLength}} ký tự.',
    trueOrFalse: 'Field này chỉ có thể chứa giá trị true hoặc false.',
    username:
      'Vui lòng nhập một tên người dùng hợp lệ. Có thể chứa các chữ cái, số, dấu gạch ngang, dấu chấm và dấu gạch dưới.',
    validUploadID: "'Field này không chứa ID tải lên hợp lệ.'",
  },
  version: {
    type: 'Loại',
    aboutToPublishSelection: 'Bạn có muốn xuất bản tất cả {{label}} không?',
    aboutToRestore: 'Bạn chuẩn bị khôi phục lại {{label}} về phiên bản {{versionDate}}.',
    aboutToRestoreGlobal:
      'Bạn chuẩn bị khôi phục lại bản toàn thể (global) của {{label}} về phiên bản {{versionDate}}.',
    aboutToRevertToPublished: 'Bạn có muốn tái xuất bản bản nháp này không?',
    aboutToUnpublish: 'Bạn có muốn ngưng xuất bản?',
    aboutToUnpublishSelection: 'Bạn có muốn ngưng xuất bản tất cả {{label}} không?',
    autosave: 'Tự động lưu dữ liệu',
    autosavedSuccessfully: 'Đã tự động lưu thành công.',
    autosavedVersion: 'Các phiên bản từ việc tự động lưu dữ liệu',
    changed: 'Đã thay đổi',
    compareVersion: 'So sánh phiên bản này với:',
    confirmPublish: 'Xác nhận xuất bản',
    confirmRevertToSaved: 'Xác nhận, quay về trạng thái đã lưu',
    confirmUnpublish: 'Xác nhận, ngưng xuất bản',
    confirmVersionRestoration: 'Xác nhận, khôi phục về phiên bản trước',
    currentDocumentStatus: 'Trạng thái tài liệu hiện tại: {{docStatus}}',
    currentDraft: 'Bản thảo hiện tại',
    currentPublishedVersion: 'Phiên bản Đã Xuất bản Hiện tại',
    draft: 'Bản nháp',
    draftSavedSuccessfully: 'Bản nháp đã được lưu thành công.',
    lastSavedAgo: 'Lần lưu cuối cùng {{distance}} trước đây',
    noFurtherVersionsFound: 'Không tìm thấy phiên bản cũ hơn',
    noRowsFound: 'Không tìm thấy: {{label}}',
    noRowsSelected: undefined,
    preview: 'Bản xem trước',
    previouslyPublished: 'Đã xuất bản trước đây',
    problemRestoringVersion: 'Đã xảy ra vấn đề khi khôi phục phiên bản này',
    publish: 'Công bố',
    publishChanges: 'Xuất bản tài liệu',
    published: 'Đã xuất bản',
    publishing: 'Xuất bản',
    restoreAsDraft: 'Khôi phục như bản nháp',
    restoreThisVersion: 'Khôi phục về phiên bản này',
    restoredSuccessfully: 'Đã khôi phục thành công.',
    restoring: 'Đang khôi phục...',
    revertToPublished: 'Quay về trạng thái đã xuất bản',
    reverting: 'Đang về trạng thái cũ...',
    saveDraft: 'Lưu bản nháp',
    selectLocales: 'Chọn mã khu vực để hiện thị',
    selectVersionToCompare: 'Chọn phiên bản để so sánh',
    showLocales: 'Hiển thị mã khu vực:',
    showingVersionsFor: 'Hiển thị các phiên bản cho:',
    status: 'Trạng thái',
    unpublish: 'Ẩn tài liệu',
    unpublishing: 'Đang ẩn tài liệu...',
    version: 'Phiên bản',
    versionCount_many: '{{count}} phiên bản được tìm thấy',
    versionCount_none: 'Không có phiên bản nào được tìm thấy',
    versionCount_one: '{{count}} phiên bản được tìm thấy',
    versionCount_other: 'Đã tìm thấy {{count}} phiên bản',
    versionCreatedOn: 'Phiên bản {{version}} được tạo vào lúc:',
    versionID: 'ID của phiên bản',
    versions: 'Danh sách phiên bản',
    viewingVersion: 'Xem phiên bản của {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: '`Xem phiên bản toàn thể (global) của {{entityLabel}}',
    viewingVersions: 'Xem những phiên bản của {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: '`Xem những phiên bản toàn thể (global) của {{entityLabel}}',
  },
}

export const vi: Language = {
  dateFNSKey: 'vi',
  translations: viTranslations,
}
